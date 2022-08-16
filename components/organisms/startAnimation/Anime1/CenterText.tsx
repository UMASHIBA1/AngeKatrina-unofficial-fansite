import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

interface Props {
  isStartAnimation: boolean;
}

interface TextAnimationProp {
  text: String;
  animationDelayMs: number;
  isStartDisappear: boolean;
}

const flashToVisible = keyframes`
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

const flashToInvisible = keyframes`
    0% {
        visibility: visible;
    }

    25%,30% {
        visibility: hidden;
    }

    31%, 50% {
        visibility: visible;
    }

    51%,56% {
        visibility: hidden;
    }

    57%, 67% {
        visibility: visible;
    }

    68%, 73% {
        visibility: hidden;
    }

    74%, 84% {
        visibility: visible;
    }

    85%, 90% {
        visibility: hidden;
    }

    91%, 96% {
        visibility: visible;
    }
    
    97%, 100% {
        visibility: hidden;
    }
`;

const textAnimationPropsData: TextAnimationProp[] = [
  { text: "N", animationDelayMs: 300, isStartDisappear: false },
  { text: "I", animationDelayMs: 330, isStartDisappear: false },
  { text: "J", animationDelayMs: 360, isStartDisappear: false },
  { text: "I", animationDelayMs: 390, isStartDisappear: false },
  { text: "S", animationDelayMs: 420, isStartDisappear: false },
  { text: "A", animationDelayMs: 450, isStartDisappear: false },
  { text: "N", animationDelayMs: 480, isStartDisappear: false },
  { text: "J", animationDelayMs: 510, isStartDisappear: false },
  { text: "I", animationDelayMs: 540, isStartDisappear: false },
  { text: "  ", animationDelayMs: 570, isStartDisappear: false },
  { text: "L", animationDelayMs: 600, isStartDisappear: false },
  { text: "I", animationDelayMs: 630, isStartDisappear: false },
  { text: "V", animationDelayMs: 660, isStartDisappear: false },
  { text: "E", animationDelayMs: 690, isStartDisappear: false },
  { text: "R", animationDelayMs: 720, isStartDisappear: false },
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

const Text = styled.p<{ delayMs: number; isStartDisappear: boolean }>`
  font-size: 10vw;
  white-space: pre;
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
  ${({ isStartDisappear, delayMs }) =>
    !isStartDisappear
      ? css`
          animation: ${flashToVisible} 500ms linear ${delayMs}ms both;
        `
      : css`
          animation: ${flashToInvisible} 500ms linear 100ms both;
        `}
`;

const useAnimationProps = () => {
  const [textAnimationProps, changeTextAnimationProps] = useState<
    TextAnimationProp[]
  >(textAnimationPropsData);
  const toDisappearAnimation = (index: number) => {
    const thisTextAnimationProp = { ...textAnimationProps[index] };
    thisTextAnimationProp.isStartDisappear = true;
    const nextTextAnimationProps = [...textAnimationProps];
    nextTextAnimationProps[index] = thisTextAnimationProp;
    changeTextAnimationProps(nextTextAnimationProps);
  };
  return [textAnimationProps, toDisappearAnimation] as [
    typeof textAnimationProps,
    typeof toDisappearAnimation
  ];
};

const CenterText: React.VFC<Props> = ({ isStartAnimation }) => {
  const [textAnimationProps, toDisappearAnimation] = useAnimationProps();
  if (isStartAnimation) {
    return (
      <Wrapper>
        {textAnimationProps.map(
          ({ text, animationDelayMs, isStartDisappear }, i) => {
            return (
              <Text
                key={`${text}${i}`}
                isStartDisappear={isStartDisappear}
                delayMs={animationDelayMs}
                onAnimationEnd={() => toDisappearAnimation(i)}
              >
                {text}
              </Text>
            );
          }
        )}
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default CenterText;
