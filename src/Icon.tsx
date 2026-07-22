"use client";

import React from "react";
import { useLottie } from "lottie-react";
import { registry, type IconId } from "./registry";
import { getRecoloredLottie } from "./recolor";
import type { LottieJSON } from "./types";

const FALLBACK_COLOR = "#000000";

export interface IconProps {
  id: IconId;
  size?: number | string;
  color?: string;
  mode?: "static" | "loop" | "onClick" | "hover";
  onClick?: () => void;
  resetAfterPlay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

function useLatestRef<T>(value: T): React.MutableRefObject<T> {
  const ref = React.useRef(value);
  ref.current = value;
  return ref;
}

export function Icon({
  id,
  size = 24,
  color = "currentColor",
  mode = "static",
  onClick,
  resetAfterPlay = true,
  className,
  style,
}: IconProps) {
  const resolvedColor = color === "currentColor" ? FALLBACK_COLOR : color;
  const rawJsonRef = React.useRef<LottieJSON | null>(null);
  const [jsonReady, setJsonReady] = React.useState(false);
  const [lottieInit, setLottieInit] = React.useState(false);

  const resetAfterPlayRef = useLatestRef(resetAfterPlay);
  const modeRef = useLatestRef(mode);

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

  if (!animationData) return null;

  return (
    <div
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
