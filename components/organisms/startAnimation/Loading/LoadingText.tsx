import React from "react";
import styled, { keyframes } from "styled-components";
import { ANGE_BLACK } from "../../../../constants/colors";
import { HWT_MARDELL_FONT_PROP } from "../../../../constants/cssProps";
import useAnimationRestarter from "../../../../hooks/useAnimationRestarter";

const textAnimation = keyframes`
    0% {
        transform: rotate3d(0,1,0,0deg);
    }

    100% {
        transform: rotate3d(0,1,0,360deg);
    }
`;

const Wrapper = styled.div`
  font-size: 1rem;
  ${HWT_MARDELL_FONT_PROP}
  color: ${ANGE_BLACK};
`;

const Text = styled.p<{ delayMs: number }>`
  display: inline-block;
  animation: ${textAnimation} 800ms ease-out ${({ delayMs }) => delayMs}ms both;
`;

const loadingText = "Loading";

const delayInterval = 200;

const LoadingText: React.VFC = () => {
  const [key, restartAnimation] = useAnimationRestarter();

  return (
    <Wrapper key={key}>
      {loadingText.split("").map((char, i) => {
        return <Text delayMs={delayInterval * i}>{char}</Text>;
      })}
      <Text
        delayMs={delayInterval * loadingText.length}
        onAnimationEnd={restartAnimation}
      >
        ...
      </Text>
    </Wrapper>
  );
};

export default LoadingText;
