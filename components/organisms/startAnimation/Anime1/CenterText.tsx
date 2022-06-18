import React from "react";
import styled, { keyframes } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

interface Props {
  isStartAnimation: boolean;
}

interface TextAnimationProp {
  text: String;
  animationDelayMs: number;
}

const flashAnimation = keyframes`
    0% {
        visibility: hidden;
    }

    25%,30% {
        visibility: visible;
    }

    31%, 50% {
        visibility: hidden;
    }

    51%,56% {
        visibility: visible;
    }

    57%, 67% {
        visibility: hidden;
    }

    68%, 73% {
        visibility: visible;
    }

    74%, 84% {
        visibility: hidden;
    }

    85%, 90% {
        visibility: visible;
    }

    91%, 96% {
        visibility: hidden;
    }
    
    97%, 100% {
        visibility: visible;
    }


`;

const textAnimationProps: TextAnimationProp[] = [
  { text: "N", animationDelayMs: 300 },
  { text: "I", animationDelayMs: 330 },
  { text: "J", animationDelayMs: 360 },
  { text: "I", animationDelayMs: 390 },
  { text: "S", animationDelayMs: 420 },
  { text: "A", animationDelayMs: 450 },
  { text: "N", animationDelayMs: 480 },
  { text: "J", animationDelayMs: 510 },
  { text: "I", animationDelayMs: 540 },
  { text: "  ", animationDelayMs: 570 },
  { text: "L", animationDelayMs: 600 },
  { text: "I", animationDelayMs: 630 },
  { text: "V", animationDelayMs: 660 },
  { text: "E", animationDelayMs: 690 },
  { text: "R", animationDelayMs: 720 },
];

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Text = styled.p<{ delayMs: number }>`
  font-size: 10vw;
  white-space: pre;
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
  animation: ${flashAnimation} 500ms linear ${({ delayMs }) => delayMs}ms both;
`;

const CenterText: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        {textAnimationProps.map(
          ({ text, animationDelayMs: animationDelay }) => (
            <Text delayMs={animationDelay}>{text}</Text>
          )
        )}
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default CenterText;
