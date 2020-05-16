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

export const toDeepInsetShadow = keyframes`
    from {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5) inset;
    }

    to {
        box-shadow: 0 0 20px 0px rgba(0,0,0,0.5) inset;
    }

`;
