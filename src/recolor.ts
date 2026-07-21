import type { LottieJSON, LottieLayer, LottieShape } from "./types";

function hexToRgba(hex: string): [number, number, number, number] {
  let h = hex.replace("#", "");
  if (h.length === 3) {
    h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  }
  return [
    parseInt(h.substring(0, 2), 16) / 255,
    parseInt(h.substring(2, 4), 16) / 255,
    parseInt(h.substring(4, 6), 16) / 255,
    1,
  ];
}

function recolorLayer(layer: LottieLayer, colorArray: [number, number, number, number]): void {
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

function recolorShape(shape: LottieShape, colorArray: [number, number, number, number]): void {
  if ((shape.ty === "fl" || shape.ty === "st") && shape.c?.k) {
    shape.c.k = colorArray;
  }
  if (shape.it) {
    for (const child of shape.it) {
      recolorShape(child, colorArray);
    }
  }
}

export function recolorLottie(json: LottieJSON, color: string): LottieJSON {
  const clone: LottieJSON = JSON.parse(JSON.stringify(json));
  const colorArray = hexToRgba(color);
  if (clone.layers) {
    for (const layer of clone.layers) {
      recolorLayer(layer, colorArray);
    }
  }
  return clone;
}

const memoCache = new Map<string, LottieJSON>();

export function getRecoloredLottie(
  iconId: string,
  json: LottieJSON,
  color: string
): LottieJSON {
  const key = `${iconId}-${color}`;
  const cached = memoCache.get(key);
  if (cached) return cached;
  const result = recolorLottie(json, color);
  memoCache.set(key, result);
  return result;
}
