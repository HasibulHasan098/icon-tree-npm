import React from "react";
import { useLottie } from "lottie-react";
import { registry, type IconId } from "./registry";
import { getRecoloredLottie } from "./recolor";
import type { LottieJSON } from "./types";

const FALLBACK_COLOR = "#000000";

function cssColorToHex(color: string): string {
  if (/^#[\da-f]{3}(?:[\da-f]{3})?$/i.test(color)) return color;
  const match = color.match(/^rgba?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)/i);
  if (!match) return FALLBACK_COLOR;
  return `#${match.slice(1, 4).map((channel) => Math.round(Number(channel)).toString(16).padStart(2, "0")).join("")}`;
}

export interface IconProps {
  id: IconId;
  size?: number | string;
  color?: string;
  mode?: "static" | "loop" | "onClick" | "hover";
  onClick?: () => void;
  bindId?: string;
  resetAfterPlay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function useLatestRef<T>(value: T): React.MutableRefObject<T> {
  const ref = React.useRef(value);
  ref.current = value;
  return ref;
}

export default function Icon({
  id,
  size = 24,
  color = "currentColor",
  mode = "static",
  onClick,
  bindId,
  resetAfterPlay = true,
  className,
  style,
}: IconProps) {
  const rawJsonRef = React.useRef<LottieJSON | null>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const [jsonReady, setJsonReady] = React.useState(false);
  const [lottieInit, setLottieInit] = React.useState(false);
  const [inheritedColor, setInheritedColor] = React.useState(FALLBACK_COLOR);

  const resetAfterPlayRef = useLatestRef(resetAfterPlay);
  const modeRef = useLatestRef(mode);
  const onClickRef = useLatestRef(onClick);
  const resolvedColor = color === "currentColor" ? inheritedColor : color;

  React.useEffect(() => {
    if (color !== "currentColor" || !rootRef.current || typeof window === "undefined") return;
    const nextColor = cssColorToHex(window.getComputedStyle(rootRef.current).color);
    setInheritedColor((current) => current === nextColor ? current : nextColor);
  }, [color, id, style?.color]);

  React.useEffect(() => {
    let cancelled = false;
    rawJsonRef.current = null;
    setJsonReady(false);

    const load = (registry as Record<string, unknown>)[id];
    if (typeof load !== "function") {
      return;
    }

    (load as () => Promise<unknown>)()
      .then((json) => {
        if (!cancelled) {
          // Dynamic import of a JSON module returns { default: <data> }
          // but tsup's ESM chunks re-export the fields directly,
          // so we handle both shapes.
          const data = (json as any).default ?? json;
          rawJsonRef.current = data as LottieJSON;
          setJsonReady(true);
        }
      })
      .catch(() => {
        if (!cancelled) {
          rawJsonRef.current = null;
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  const animationData = React.useMemo(() => {
    if (!rawJsonRef.current) return null;
    return getRecoloredLottie(id, rawJsonRef.current, resolvedColor);
  }, [id, resolvedColor, jsonReady]);

  const { View, animationItem } = useLottie(
    {
      animationData: animationData ?? undefined,
      autoplay: false,
      loop: false,
      onDOMLoaded: () => setLottieInit(true),
      onComplete: () => {
        if (resetAfterPlayRef.current) {
          animationItem?.goToAndStop(0, true);
        }
      },
    },
  );

  const animRef = useLatestRef(animationItem);

  React.useEffect(() => {
    const item = animRef.current;
    if (!lottieInit || !item) return;

    if (modeRef.current === "loop") {
      item.loop = true;
      item.play();
    } else {
      item.loop = false;
      item.goToAndStop(0, true);
    }
  }, [lottieInit, mode]);

  const handleClick = React.useCallback(() => {
    if (modeRef.current === "onClick") {
      animRef.current?.goToAndPlay(0, true);
      onClick?.();
    }
  }, [mode, onClick]);

  const handleMouseEnter = React.useCallback(() => {
    if (modeRef.current === "hover") {
      animRef.current?.goToAndPlay(0, true);
    }
  }, [mode]);

  React.useEffect(() => {
    if (!bindId || typeof document === "undefined") return;
    const target = document.getElementById(bindId);
    if (!target) return;

    const triggerAnimation = () => {
      if (modeRef.current !== "onClick") return;
      animRef.current?.goToAndPlay(0, true);
      onClickRef.current?.();
    };

    target.addEventListener("click", triggerAnimation);
    return () => target.removeEventListener("click", triggerAnimation);
  }, [bindId]);

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 0,
        ...style,
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      {View}
    </div>
  );
}
