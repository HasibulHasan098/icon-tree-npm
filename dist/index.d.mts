import React from 'react';

declare const registry: {
    readonly heart: () => Promise<{
        default: {
            v: string;
            fr: number;
            ip: number;
            op: number;
            w: number;
            h: number;
            nm: string;
            ddd: number;
            assets: never[];
            layers: {
                ddd: number;
                ind: number;
                ty: number;
                nm: string;
                sr: number;
                ks: {
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    r: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                };
                ao: number;
                ef: {
                    ty: number;
                    nm: string;
                    np: number;
                    mn: string;
                    ix: number;
                    en: number;
                    ef: {
                        ty: number;
                        nm: string;
                        mn: string;
                        ix: number;
                        v: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                    }[];
                }[];
                shapes: {
                    ty: string;
                    it: ({
                        ind: number;
                        ty: string;
                        ix: number;
                        ks: {
                            a: number;
                            k: ({
                                i: {
                                    x: number;
                                    y: number;
                                };
                                o: {
                                    x: number;
                                    y: number;
                                };
                                t: number;
                                s: {
                                    i: number[][];
                                    o: number[][];
                                    v: number[][];
                                    c: boolean;
                                }[];
                            } | {
                                t: number;
                                s: {
                                    i: number[][];
                                    o: number[][];
                                    v: number[][];
                                    c: boolean;
                                }[];
                                i?: undefined;
                                o?: undefined;
                            })[];
                            ix: number;
                        };
                        nm: string;
                        mn: string;
                        hd: boolean;
                        c?: undefined;
                        o?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        bm?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        c: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                            x?: undefined;
                        };
                        w: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        lc: number;
                        lj: number;
                        bm: number;
                        nm: string;
                        mn: string;
                        hd: boolean;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        p?: undefined;
                        a?: undefined;
                        s?: undefined;
                        r?: undefined;
                        sk?: undefined;
                        sa?: undefined;
                    } | {
                        ty: string;
                        p: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        a: {
                            a: number;
                            k: number[];
                            ix: number;
                        };
                        s: {
                            a: number;
                            k: ({
                                i: {
                                    x: number[];
                                    y: number[];
                                };
                                o: {
                                    x: number[];
                                    y: number[];
                                };
                                t: number;
                                s: number[];
                            } | {
                                t: number;
                                s: number[];
                                i?: undefined;
                                o?: undefined;
                            })[];
                            ix: number;
                            x: string;
                        };
                        r: {
                            a: number;
                            k: ({
                                i: {
                                    x: number[];
                                    y: number[];
                                };
                                o: {
                                    x: number[];
                                    y: number[];
                                };
                                t: number;
                                s: number[];
                            } | {
                                t: number;
                                s: number[];
                                i?: undefined;
                                o?: undefined;
                            })[];
                            ix: number;
                            x: string;
                        };
                        o: {
                            a: number;
                            k: number;
                            ix: number;
                            x: string;
                        };
                        sk: {
                            a: number;
                            k: number;
                            ix: number;
                            x: string;
                        };
                        sa: {
                            a: number;
                            k: number;
                            ix: number;
                        };
                        nm: string;
                        ind?: undefined;
                        ix?: undefined;
                        ks?: undefined;
                        mn?: undefined;
                        hd?: undefined;
                        c?: undefined;
                        w?: undefined;
                        lc?: undefined;
                        lj?: undefined;
                        bm?: undefined;
                    })[];
                    nm: string;
                    np: number;
                    cix: number;
                    bm: number;
                    ix: number;
                    mn: string;
                    hd: boolean;
                }[];
                ip: number;
                op: number;
                st: number;
                bm: number;
            }[];
            markers: never[];
        };
        v: string;
        fr: number;
        ip: number;
        op: number;
        w: number;
        h: number;
        nm: string;
        ddd: number;
        assets: never[];
        layers: {
            ddd: number;
            ind: number;
            ty: number;
            nm: string;
            sr: number;
            ks: {
                o: {
                    a: number;
                    k: number;
                    ix: number;
                };
                r: {
                    a: number;
                    k: number;
                    ix: number;
                };
                p: {
                    a: number;
                    k: number[];
                    ix: number;
                };
                a: {
                    a: number;
                    k: number[];
                    ix: number;
                };
                s: {
                    a: number;
                    k: number[];
                    ix: number;
                };
            };
            ao: number;
            ef: {
                ty: number;
                nm: string;
                np: number;
                mn: string;
                ix: number;
                en: number;
                ef: {
                    ty: number;
                    nm: string;
                    mn: string;
                    ix: number;
                    v: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                }[];
            }[];
            shapes: {
                ty: string;
                it: ({
                    ind: number;
                    ty: string;
                    ix: number;
                    ks: {
                        a: number;
                        k: ({
                            i: {
                                x: number;
                                y: number;
                            };
                            o: {
                                x: number;
                                y: number;
                            };
                            t: number;
                            s: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            }[];
                        } | {
                            t: number;
                            s: {
                                i: number[][];
                                o: number[][];
                                v: number[][];
                                c: boolean;
                            }[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                    };
                    nm: string;
                    mn: string;
                    hd: boolean;
                    c?: undefined;
                    o?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    bm?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    c: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                        x?: undefined;
                    };
                    w: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    lc: number;
                    lj: number;
                    bm: number;
                    nm: string;
                    mn: string;
                    hd: boolean;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    p?: undefined;
                    a?: undefined;
                    s?: undefined;
                    r?: undefined;
                    sk?: undefined;
                    sa?: undefined;
                } | {
                    ty: string;
                    p: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    a: {
                        a: number;
                        k: number[];
                        ix: number;
                    };
                    s: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                        x: string;
                    };
                    r: {
                        a: number;
                        k: ({
                            i: {
                                x: number[];
                                y: number[];
                            };
                            o: {
                                x: number[];
                                y: number[];
                            };
                            t: number;
                            s: number[];
                        } | {
                            t: number;
                            s: number[];
                            i?: undefined;
                            o?: undefined;
                        })[];
                        ix: number;
                        x: string;
                    };
                    o: {
                        a: number;
                        k: number;
                        ix: number;
                        x: string;
                    };
                    sk: {
                        a: number;
                        k: number;
                        ix: number;
                        x: string;
                    };
                    sa: {
                        a: number;
                        k: number;
                        ix: number;
                    };
                    nm: string;
                    ind?: undefined;
                    ix?: undefined;
                    ks?: undefined;
                    mn?: undefined;
                    hd?: undefined;
                    c?: undefined;
                    w?: undefined;
                    lc?: undefined;
                    lj?: undefined;
                    bm?: undefined;
                })[];
                nm: string;
                np: number;
                cix: number;
                bm: number;
                ix: number;
                mn: string;
                hd: boolean;
            }[];
            ip: number;
            op: number;
            st: number;
            bm: number;
        }[];
        markers: never[];
    }>;
};
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
