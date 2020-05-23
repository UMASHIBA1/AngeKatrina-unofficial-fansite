import { keyframes } from "styled-components";

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
        transform: scale(${magnification})
    }
`;
