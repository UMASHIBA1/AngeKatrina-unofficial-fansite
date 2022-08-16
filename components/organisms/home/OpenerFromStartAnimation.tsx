import React from "react";
import styled, { keyframes } from "styled-components";
import { ANGE_YELLOW } from "../../../constants/colors";

interface Props {
  onOpen: () => void;
}

const opening = keyframes`
    0% {
        transform: rotate(-45deg) translateY(0);
    }

    100% {
        transform: rotate(-45deg) translateY(-100%);
    }
`;

const YellowOpener = styled.div`
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  transform-origin: center;
  background-color: ${ANGE_YELLOW};
  animation: ${opening} 300ms ease-in 0ms both;
  z-index: 110;
`;

const OpenerFromStartAnimation: React.VFC<Props> = ({ onOpen }) => {
  return <YellowOpener onAnimationEnd={onOpen} />;
};

export default OpenerFromStartAnimation;
