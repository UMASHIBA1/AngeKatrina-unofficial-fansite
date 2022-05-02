import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_BLACK } from "../../../../constants/colors";
import { HWT_MARDELL_FONT_PROP } from "../../../../constants/cssProps";

const textAnimation = keyframes`
    0% {
        transform: rotate3d(0,1,0,0deg);
    }

    100% {
        transform: rotate3d(0,1,0,360deg);
    }
`;

const disappearAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }


  100% {
    transform: translateY(16px);
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  font-size: 1rem;
  ${HWT_MARDELL_FONT_PROP}
  color: ${ANGE_BLACK};
`;

type animationKind = "loading" | "disappear";

const Text = styled.p<{ animationKind: animationKind; delayMs: number }>`
  display: inline-block;
  ${({ animationKind, delayMs }) =>
    animationKind === "loading" &&
    css`
      animation: ${textAnimation} 600ms ease-out ${delayMs}ms both;
    `}
  ${({ animationKind, delayMs }) =>
    animationKind === "disappear" &&
    css`
      animation: ${disappearAnimation} 600ms ease-out ${delayMs}ms both;
    `}
`;

const loadingText = "Loading";

const loadingDelayInterval = 100;
const disappearDelayInterval = 50;

const useAnimation = () => {
  const [animationKind, changeAnimationKind] = useState<animationKind>(
    "loading"
  );

  const toNextAnimation = () => {
    changeAnimationKind("disappear");
  };

  return [animationKind, toNextAnimation] as [
    animationKind,
    typeof toNextAnimation
  ];
};

const LoadingText: React.VFC = () => {
  const [animationKind, toNextAnimation] = useAnimation();

  return (
    <Wrapper>
      {loadingText.split("").map((char, i) => {
        return (
          <Text
            animationKind={animationKind}
            delayMs={
              animationKind === "loading"
                ? loadingDelayInterval * i + 300
                : disappearDelayInterval * i
            }
          >
            {char}
          </Text>
        );
      })}
      <Text
        animationKind={animationKind}
        delayMs={
          animationKind === "loading"
            ? loadingDelayInterval * loadingText.length + 300
            : disappearDelayInterval * loadingText.length
        }
        onAnimationEnd={toNextAnimation}
      >
        ...
      </Text>
    </Wrapper>
  );
};

export default LoadingText;
