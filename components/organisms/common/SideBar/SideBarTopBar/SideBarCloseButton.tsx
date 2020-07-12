import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  ANGE_WHITE,
  ANGE_LIVE_BACK_COLOR,
} from "../../../../../constants/colors";

interface Props {
  onClickFC?: () => void;
}

const Wrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
`;

const transitionTime = "200ms";

const CloseButtonOutLine = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${ANGE_WHITE};
  border: 2px solid ${ANGE_LIVE_BACK_COLOR};
  cursor: pointer;
  border-radius: 50%;
  transition: background-color ${transitionTime}, border ${transitionTime};
  :hover {
    background-color: ${ANGE_LIVE_BACK_COLOR};
    border: 2px solid ${ANGE_WHITE};
  }
`;

const CloseButton = styled.div<{ isHovering: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  background-color: ${({ isHovering }) =>
    isHovering ? ANGE_WHITE : ANGE_LIVE_BACK_COLOR};
  transition: background-color ${transitionTime};
  border-radius: 50%;
`;

const lineCSS = css<{ isHovering: boolean }>`
  position: absolute;
  display: flex;
  height: 5px;
  width: 70%;
  border-radius: 3px;
  transition: background-color ${transitionTime};
  background-color: ${({ isHovering }) =>
    isHovering ? ANGE_LIVE_BACK_COLOR : ANGE_WHITE};
`;

const LeftTopLine = styled.div<{ isHovering: boolean }>`
  ${lineCSS}
  transform: rotate(-45deg);
`;

const RightTopLine = styled.div<{ isHovering: boolean }>`
  ${lineCSS}
  transform: rotate(45deg);
`;

const SideBarCloseButton: React.FC<Props> = (props: Props) => {
  const [isHovering, changeIsHovering] = useState(false);

  return (
    <Wrapper>
      <CloseButtonOutLine
        onClick={props.onClickFC}
        onMouseEnter={() => changeIsHovering(true)}
        onMouseLeave={() => changeIsHovering(false)}
      >
        <CloseButton isHovering={isHovering}>
          <LeftTopLine isHovering={isHovering} />
          <RightTopLine isHovering={isHovering} />
        </CloseButton>
      </CloseButtonOutLine>
    </Wrapper>
  );
};

export default SideBarCloseButton;
