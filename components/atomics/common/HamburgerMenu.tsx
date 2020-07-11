import React from "react";
import styled from "styled-components";
import { ANGE_WHITE, ANGE_LIVE_BACK_COLOR } from "../../../constants/colors";

interface Props {
  onClickFC?: () => void;
}

const Circle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${ANGE_WHITE};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: fixed;
  top: 8px;
  right: 8px;
`;

const Line = styled.div`
  display: flex;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  width: 65%;
  height: 4px;
  margin: 3px 0 3px 0;
  border-radius: 2px;
`;

const HamburgerMenu: React.FC<Props> = (props: Props) => {
  return (
    <Circle onClick={props.onClickFC}>
      <Line />
      <Line />
      <Line />
    </Circle>
  );
};

export default HamburgerMenu;
