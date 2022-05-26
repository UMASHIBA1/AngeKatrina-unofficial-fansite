import React from "react";
import styled, { keyframes } from "styled-components";
import { ANGE_WHITE, ANGE_YELLOW } from "../../../../constants/colors";
import { leftRotate, toVisible } from "../../../../styles/commonAnimation";

interface Props {
  isStartAnimation: boolean;
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

const delayMs = 400;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  animation: ${toVisible} 0ms ${delayMs}ms forwards;
`;

const BorderCircle = styled.div`
  position: absolute;
  bottom: -76vh;
  right: -76vh;
  width: 152vh;
  height: 152vh;
  border: 1px solid ${ANGE_YELLOW};
  border-radius: 50%;
`;

const HideCircle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 76vh;
  height: 76vh;
  background-color: transparent;
  border: 1px solid ${ANGE_WHITE};
  border-top-left-radius: 100%;
  transform-origin: bottom right;
  animation: ${leftRotate("0", "-90deg")} 300ms ease-out ${delayMs}ms both;
`;

const YellowCircle = styled.div`
  position: absolute;
  bottom: -76vh;
  right: -76vh;
  width: 152vh;
  height: 152vh;
  background-color: ${ANGE_YELLOW};
  border-radius: 50%;
  animation: ${flashAnimation} 500ms linear ${delayMs}ms both;
`;

const RightBottomCircle: React.VFC<Props> = ({ isStartAnimation }) => {
  if (isStartAnimation) {
    return (
      <Wrapper>
        <BorderCircle />
        <HideCircle />
        <YellowCircle />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default RightBottomCircle;
