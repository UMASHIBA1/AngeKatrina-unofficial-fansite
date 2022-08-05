import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import { toVisible, translate } from "../../../../styles/commonAnimation";

interface Props {
  fontSize: string;
  children: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const Text = styled.div<{
  fontSize: Props["fontSize"];
  top?: Props["top"];
  left?: Props["left"];
  right?: Props["right"];
  bottom?: Props["bottom"];
  text: Props["children"];
  isStartAnimation: boolean;
}>`
  position: absolute;
  ${({ top }) =>
    top &&
    css`
      top: ${top};
    `}
  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
    ${({ right }) =>
    right &&
    css`
      right: ${right};
    `}
    ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}
    ${({ fontSize }) => css`
    font-size: ${fontSize};
  `}
  text-shadow: 1px 0px ${ANGE_LIVE_BACK_COLOR}, 
  0px 1px ${ANGE_LIVE_BACK_COLOR},
  -1px 0px ${ANGE_LIVE_BACK_COLOR},
  0px -1px ${ANGE_LIVE_BACK_COLOR};
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
  overflow: hidden;
  visibility: hidden;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${toVisible} 200ms ease-in-out both 300ms;
    `}

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    z-index: 1;
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${translate({ x: "-100%", y: 0 }, { x: "101%", y: 0 })} 400ms
          ease-in-out both 300ms;
      `}
  }

  ::after {
    position: absolute;
    top: 0px;
    left: 0px;
    ${({ text }) => css`
      content: "${text}";
    `}
    color: ${ANGE_WHITE};
    ${({ fontSize }) => css`
      font-size: ${fontSize};
    `}
    ${BUNKYU_MIDASHI_GO_STD}
  }
`;

const BGBorderText: React.VFC<Props> = ({
  fontSize,
  top,
  left,
  right,
  bottom,
  children,
}) => {
  const [ref, isStartAnimation] = useIntersectionObserver<HTMLDivElement>({
    margin: 400,
  });

  useEffect(() => {
    console.log("run text animation");
  }, [isStartAnimation]);

  return (
    <Text
      isStartAnimation={isStartAnimation}
      ref={ref}
      fontSize={fontSize}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      text={children}
    >
      {children}
    </Text>
  );
};

export default BGBorderText;
