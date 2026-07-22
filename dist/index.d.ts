import React from 'react';

declare const registry: {};
type IconId = keyof typeof registry;

interface IconProps {
    id: IconId;
    size?: number | string;
    color?: string;
    mode?: "static" | "loop" | "onClick" | "hover";
    onClick?: () => void;
    resetAfterPlay?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare function Icon({ id, size, color, mode, onClick, resetAfterPlay, className, style, }: IconProps): React.JSX.Element | null;

interface LottieShape {
    ty: string;
    c?: {
        k: number[];
    };
    it?: LottieShape[];
    [key: string]: unknown;
}
interface LottieLayer {
    shapes?: LottieShape[];
    layers?: LottieLayer[];
    ty: number;
    [key: string]: unknown;
}
interface LottieJSON {
    layers?: LottieLayer[];
    [key: string]: unknown;
}

declare function recolorLottie(json: LottieJSON, color: string): LottieJSON;
declare function getRecoloredLottie(iconId: string, json: LottieJSON, color: string): LottieJSON;

export { Icon, type IconId, type IconProps, type LottieJSON, Icon as default, getRecoloredLottie, recolorLottie };
