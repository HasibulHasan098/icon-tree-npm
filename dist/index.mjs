// src/Icon.tsx
import React from "react";
import { useLottie } from "lottie-react";

// src/registry.ts
var registry = {
  "heart": () => import("./heart-4D34NVF6.mjs")
};

// src/recolor.ts
function hexToRgba(hex) {
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  return [
    parseInt(h.substring(0, 2), 16) / 255,
    parseInt(h.substring(2, 4), 16) / 255,
    parseInt(h.substring(4, 6), 16) / 255,
    1
  ];
}
function recolorLayer(layer, colorArray) {
  if (layer.layers) {
    for (const sub of layer.layers) {
      recolorLayer(sub, colorArray);
    }
  }
  if (layer.shapes) {
    for (const shape of layer.shapes) {
      recolorShape(shape, colorArray);
    }
  }
}
function recolorShape(shape, colorArray) {
  if ((shape.ty === "fl" || shape.ty === "st") && shape.c?.k) {
    shape.c.k = colorArray;
  }
  if (shape.it) {
    for (const child of shape.it) {
      recolorShape(child, colorArray);
    }
  }
}
function recolorLottie(json, color) {
  const clone = JSON.parse(JSON.stringify(json));
  const colorArray = hexToRgba(color);
  if (clone.layers) {
    for (const layer of clone.layers) {
      recolorLayer(layer, colorArray);
    }
  }
  return clone;
}
var memoCache = /* @__PURE__ */ new Map();
function getRecoloredLottie(iconId, json, color) {
  const key = `${iconId}-${color}`;
  const cached = memoCache.get(key);
  if (cached) return cached;
  const result = recolorLottie(json, color);
  memoCache.set(key, result);
  return result;
}

// src/Icon.tsx
var FALLBACK_COLOR = "#000000";
function useLatestRef(value) {
  const ref = React.useRef(value);
  ref.current = value;
  return ref;
}
function Icon({
  id,
  size = 24,
  color = "currentColor",
  mode = "static",
  onClick,
  resetAfterPlay = true,
  className,
  style
}) {
  const resolvedColor = color === "currentColor" ? FALLBACK_COLOR : color;
  const rawJsonRef = React.useRef(null);
  const [jsonReady, setJsonReady] = React.useState(false);
  const [lottieInit, setLottieInit] = React.useState(false);
  const resetAfterPlayRef = useLatestRef(resetAfterPlay);
  const modeRef = useLatestRef(mode);
  React.useEffect(() => {
    let cancelled = false;
    rawJsonRef.current = null;
    setJsonReady(false);
    registry[id]().then((json) => {
      if (!cancelled) {
        const data = json.default ?? json;
        rawJsonRef.current = data;
        setJsonReady(true);
      }
    }).catch(() => {
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
      animationData: animationData ?? void 0,
      autoplay: false,
      loop: false,
      onDOMLoaded: () => setLottieInit(true),
      onComplete: () => {
        if (resetAfterPlayRef.current) {
          animationItem?.goToAndStop(0, true);
        }
      }
    }
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
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className,
      style: {
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 0,
        ...style
      },
      onClick: handleClick,
      onMouseEnter: handleMouseEnter
    },
    View
  );
}

// src/index.ts
var index_default = Icon;
export {
  Icon,
  index_default as default,
  getRecoloredLottie,
  recolorLottie
};
