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

export const toDeepInsetShadow = (shadowSpreadRadius = 20) => keyframes`
    from {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5) inset;
    }

    to {
        box-shadow: 0 0 0 ${shadowSpreadRadius}px rgba(0,0,0,0.5) inset;
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

export const expand = (diameter: number) => keyframes`
    to {
        width: ${diameter}px;
        height: ${diameter}px;
    }
`;
