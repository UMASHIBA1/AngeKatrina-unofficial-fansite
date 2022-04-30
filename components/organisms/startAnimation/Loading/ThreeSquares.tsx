import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_BLACK, ANGE_YELLOW } from "../../../../constants/colors";

const rotateSquare = keyframes`
    0% {
        transform: rotate(0);
    }

    45%, 55% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(90deg);
    }
`;

const squareColorChange = keyframes`
    0% {
        background-color: ${ANGE_YELLOW};
    }

    25%,75% {
        background-color: ${ANGE_BLACK};
    }

    76%, 100% {
        background-color: ${ANGE_YELLOW};
    }
`;

const Square = styled.div<{ delayMs: number }>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${ANGE_YELLOW};
  ${({ delayMs }) =>
    css`
      animation: ${rotateSquare} 600ms ease-in-out both ${delayMs}ms,
        ${squareColorChange} 600ms forwards ${delayMs}ms;
    `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const useAnimation = () => {
  const [key, changeKey] = useState(0);

  const restartAnimation = () => {
    changeKey(key + 1);
  };

  return [key, restartAnimation] as [typeof key, typeof restartAnimation];
};

const ThreeSquares: React.VFC = () => {
  const [key, restartAnimation] = useAnimation();

  return (
    <Wrapper key={key}>
      <Square delayMs={200} />
      <Square delayMs={600} />
      <Square delayMs={1000} onAnimationEnd={restartAnimation} />
    </Wrapper>
  );
};

export default ThreeSquares;
