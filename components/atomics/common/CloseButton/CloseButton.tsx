import React, { useState } from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import { boundExpand, scale } from "../../../../styles/commonAnimation";

export interface CloseButtonProps {
  displayAnimationDelay: number;
  disableAnimationDelay: number;
  runDisplayAnimation: boolean;
  runCloseAnimation: boolean;
  onClickFC?: () => void;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  zIndex?: number | string;
}

const Wrapper = styled.div<Required<Omit<CloseButtonProps, "onClickFC">>>`
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${({ zIndex }) => zIndex};
  width: 55px;
  height: 55px;
  ${({ runDisplayAnimation, displayAnimationDelay }) =>
    runDisplayAnimation &&
    css`
      transform: scale(0);
      animation: ${boundExpand(40, 1.1)} 500ms ease-out forwards
        ${displayAnimationDelay}ms;
    `}

  ${({ runCloseAnimation, disableAnimationDelay }) =>
    runCloseAnimation &&
    css`
      transform: scale(1.1);
      animation: ${scale(0)} 200ms ease-out forwards ${disableAnimationDelay}ms;
    `}
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

const CloseButtonMain = styled.div<{ isHovering: boolean }>`
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

const CloseButton: React.FC<CloseButtonProps> = ({
  onClickFC,
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto",
  zIndex = "auto",
  displayAnimationDelay,
  disableAnimationDelay,
  runDisplayAnimation,
  runCloseAnimation,
}: CloseButtonProps) => {
  const [isHovering, changeIsHovering] = useState(false);

  return (
    <Wrapper
      zIndex={zIndex}
      runDisplayAnimation={runDisplayAnimation}
      runCloseAnimation={runCloseAnimation}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      disableAnimationDelay={disableAnimationDelay}
      displayAnimationDelay={displayAnimationDelay}
    >
      <CloseButtonOutLine
        onClick={onClickFC}
        onMouseEnter={() => changeIsHovering(true)}
        onMouseLeave={() => changeIsHovering(false)}
      >
        <CloseButtonMain isHovering={isHovering}>
          <LeftTopLine isHovering={isHovering} />
          <RightTopLine isHovering={isHovering} />
        </CloseButtonMain>
      </CloseButtonOutLine>
    </Wrapper>
  );
};

export default CloseButton;
