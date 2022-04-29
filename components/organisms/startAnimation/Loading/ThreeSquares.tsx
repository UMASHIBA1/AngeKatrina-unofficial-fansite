import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_BLACK, ANGE_YELLOW } from "../../../../constants/colors";

const rotateSquare = keyframes`
    0% {
        transform: rotate(0);
    }

    25%, 75% {
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

    100% {
        background-color: ${ANGE_YELLOW};
    }
`;

const Square = styled.div<{ runAnimation: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${ANGE_YELLOW};
  ${({ runAnimation }) =>
    runAnimation &&
    css`
      animation: ${rotateSquare} 600ms ease-in-out both,
        ${squareColorChange} 600ms forwards;
    `}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const useAnimation = () => {
  const [runAnimation, setRunningAnimation] = useState<
    [boolean, boolean, boolean]
  >([true, false, false]);

  const changeRunAnimation = () => {
    setRunningAnimation([runAnimation[2], runAnimation[0], runAnimation[1]]);
  };

  return [runAnimation, changeRunAnimation] as [
    typeof runAnimation,
    typeof changeRunAnimation
  ];
};

const ThreeSquares: React.VFC = () => {
  const [
    [runFirst, runSecond, runThird],
    changeRunningAnimation,
  ] = useAnimation();

  return (
    <Wrapper>
      <Square
        runAnimation={runFirst}
        onAnimationEnd={runFirst ? changeRunningAnimation : () => {}}
      />
      <Square
        runAnimation={runSecond}
        onAnimationEnd={runSecond ? changeRunningAnimation : () => {}}
      />
      <Square
        runAnimation={runThird}
        onAnimationEnd={runThird ? changeRunningAnimation : () => {}}
      />
    </Wrapper>
  );
};

export default ThreeSquares;
