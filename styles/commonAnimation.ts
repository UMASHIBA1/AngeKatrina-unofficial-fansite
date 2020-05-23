import { keyframes } from "styled-components";
import LocationXY from "../typing/LocationXY";

export const rightRotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const leftRotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-360deg);
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
