import React from "react";
import styled, { keyframes } from "styled-components";
import { ANGE_YELLOW } from "../../../../constants/colors";

interface Props {
  onClose: () => void;
}

const closing = keyframes`
    0% {
        transform: rotate(-45deg) translateY(100%);
    }

    100% {
        transform: rotate(-45deg) translateY(0);
    }
`;

const YellowCloser = styled.div`
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  transform-origin: center;
  background-color: ${ANGE_YELLOW};
  animation: ${closing} 300ms ease-out 2700ms both;
`;

const CloseAnime3: React.VFC<Props> = ({ onClose }) => {
  return <YellowCloser onAnimationEnd={onClose} />;
};

export default CloseAnime3;
