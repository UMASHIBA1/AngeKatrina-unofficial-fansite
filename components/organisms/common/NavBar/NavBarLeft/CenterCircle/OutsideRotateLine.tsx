import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../../../constants/colors";
import {
  fadein,
  fadeout,
  leftRotate,
} from "../../../../../../styles/commonAnimation";

interface Props {
  diameter: number;
}

const Wrapper = styled.div<Props>`
  position: absolute;
  top: calc(50% - ${({ diameter }) => diameter / 2}px);
  left: calc(50% - ${({ diameter }) => diameter / 2}px);
  width: ${({ diameter }) => diameter}px;
  height: ${({ diameter }) => diameter}px;
  animation: ${fadein()} 400ms ease-out 400ms both,
    ${leftRotate()} 1000ms both cubic-bezier(0.33, 1, 0.68, 1) 400ms,
    ${fadeout} 400ms forwards ease-out 1000ms;
`;

const BorderLine = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 6px solid ${ANGE_LIVE_BACK_COLOR};
  clip-path: polygon(50% 50%, 100% 50%, 100% 100%);
  box-sizing: border-box;
`;

const OutsideRotateLine: React.VFC<Props> = ({ diameter }: Props) => {
  return (
    <Wrapper diameter={diameter}>
      <BorderLine />
    </Wrapper>
  );
};

export default OutsideRotateLine;
