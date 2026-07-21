export interface LottieShape {
  ty: string;
  c?: { k: number[] };
  it?: LottieShape[];
  [key: string]: unknown;
}

export interface LottieLayer {
  shapes?: LottieShape[];
  layers?: LottieLayer[];
  ty: number;
  [key: string]: unknown;
}

export interface LottieJSON {
  layers?: LottieLayer[];
  [key: string]: unknown;
}
