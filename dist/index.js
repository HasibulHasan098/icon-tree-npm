"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Icon: () => Icon,
  default: () => index_default,
  getRecoloredLottie: () => getRecoloredLottie,
  recolorLottie: () => recolorLottie
});
module.exports = __toCommonJS(index_exports);

// src/Icon.tsx
var import_react = __toESM(require("react"));
var import_lottie_react = require("lottie-react");

// src/registry.ts
var registry = {};

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
  const ref = import_react.default.useRef(value);
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
  const rawJsonRef = import_react.default.useRef(null);
  const [jsonReady, setJsonReady] = import_react.default.useState(false);
  const [lottieInit, setLottieInit] = import_react.default.useState(false);
  const resetAfterPlayRef = useLatestRef(resetAfterPlay);
  const modeRef = useLatestRef(mode);
  import_react.default.useEffect(() => {
    let cancelled = false;
    rawJsonRef.current = null;
    setJsonReady(false);
    const load = registry[id];
    if (typeof load !== "function") {
      return;
    }
    load().then((json) => {
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
  const animationData = import_react.default.useMemo(() => {
    if (!rawJsonRef.current) return null;
    return getRecoloredLottie(id, rawJsonRef.current, resolvedColor);
  }, [id, resolvedColor, jsonReady]);
  const { View, animationItem } = (0, import_lottie_react.useLottie)(
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
  import_react.default.useEffect(() => {
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
  const handleClick = import_react.default.useCallback(() => {
    if (modeRef.current === "onClick") {
      animRef.current?.goToAndPlay(0, true);
      onClick?.();
    }
  }, [mode, onClick]);
  const handleMouseEnter = import_react.default.useCallback(() => {
    if (modeRef.current === "hover") {
      animRef.current?.goToAndPlay(0, true);
    }
  }, [mode]);
  if (!animationData) return null;
  return /* @__PURE__ */ import_react.default.createElement(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Icon,
  getRecoloredLottie,
  recolorLottie
});
