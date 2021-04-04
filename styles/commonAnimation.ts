import { keyframes } from "styled-components";
import LocationXY from "../typing/LocationXY";

export const rightRotate = (
  from: string = "0deg",
  to: string = "360deg"
) => keyframes`
    from {
        transform: rotate(${from});
    }

    to {
        transform: rotate(${to});
    }
`;

export const leftRotate = (
  from: string = "0deg",
  to: string = "-360deg"
) => keyframes`
    from {
        transform: rotate(${from});
    }

    to {
        transform: rotate(${to});
    }
`;

export const fadein = (to: number = 1) => keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: ${to};
    }
`;

export const fadeout = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

export const toVisible = keyframes`
    to {
        visibility: visible;
    }
`;

export const toUnvisible = keyframes`
    to {
        visibility: hidden;
    }
`;

export const toDeepInsetShadow = (
  shadowSpreadRadius = 20,
  color = "rgba(0,0,0,0.5)"
) => keyframes`
    from {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5) inset;
    }

    to {
        box-shadow: 0 0 0 ${shadowSpreadRadius}px ${color} inset;
    }
`;

export const toDeepDropShadow = (
  shadowSpreadRadius = 20,
  color = "rgba(0,0,0,0.5)"
) => keyframes`
    from {
        filter: drop-shadow(0px 0px 0px rgba(0,0,0,0.5));
    }

    to {
        filter: drop-shadow(0px 0px ${shadowSpreadRadius}px ${color});
    }
`;

export const removeDeepDropShadow = (
  shadowSpreadRadius = 20,
  color = "rgba(0,0,0,0.5)"
) => keyframes`
    from {
        filter: drop-shadow(0px 0px ${shadowSpreadRadius}px ${color});
    }

    to {
        filter: drop-shadow(0px 0px 0px rgba(0,0,0,0.5));
    }
`;

export const scale = (magnification: number) => keyframes`
    to {
        transform: scale(${magnification});
    }
`;

export const translate = (from: LocationXY, to: LocationXY) => {
  const fromX = typeof from.x === "number" ? `${from.x}px` : from.x;
  const fromY = typeof from.y === "number" ? `${from.y}px` : from.y;
  const toX = typeof to.x === "number" ? `${to.x}px` : to.x;
  const toY = typeof to.y === "number" ? `${to.y}px` : to.y;

  return keyframes`
    from {
        transform: translate(${fromX}, ${fromY});
    }

    to {
        transform: translate(${toX}, ${toY});
    }
`;
};

export const bgColorChange = (from: string, to: string) => {
  return keyframes`
        from {
            background-color: ${from};
        }

        to {
            background-color: ${to};
        }
    `;
};

export const bounceToX = (from: string, to: string, maxBounce: string) => {
  // NOTE maxBounce_percentは最大の跳ね返りを5%にしたいなら5%を指定する
  return keyframes`
        0% {
            transform: translateX(${from});
        }

        20% {
            transform: translateX(${to});
        }

        40% {
            transform: translateX(${maxBounce});
        }

        60% {
            transform: translateX(0);
        }

        80% {
            transform: translateX(calc(${maxBounce} / 2));
        }

        100% {
            transform: translateX(0);
        }
    `;
};

export const bounceToY = (from: string, to: string, maxBounce: string) => {
  // NOTE maxBounce_percentは最大の跳ね返りを5%にしたいなら5%を指定する
  return keyframes`
        0% {
            transform: translateY(${from});
        }

        20% {
            transform: translateY(${to});
        }

        40% {
            transform: translateY(${maxBounce});
        }

        60% {
            transform: translateY(0);
        }

        80% {
            transform: translateY(calc(${maxBounce} / 2));
        }

        100% {
            transform: translateY(0);
        }
    `;
};

export const boundExpand = (
  bouncePercent: number = 30,
  bounceRatio: number = 1.2
) => keyframes`
    0% {
        transform: scale(0);
    }

    ${bouncePercent}% {
        transform: scale(${bounceRatio});
    }

    100% {
        transform: scale(1);
    }
`;

export const boundShrink = (
  bouncePercent: number = 70,
  bounceRatio: number = 1.2
) => keyframes`
    0% {
        transform: scale(1);
    }

    ${bouncePercent}% {
        transform: scale(${bounceRatio});
    }

    100% {
        transform: scale(0);
    }
`;

export const boundExpandY = (
  bouncePercent: number = 30,
  bounceRatio: number = 1.2
) => keyframes`
        0% {
        transform: scaleY(0);
    }

    ${bouncePercent}% {
        transform: scaleY(${bounceRatio});
    }

    100% {
        transform: scaleY(1);
    }
`;
