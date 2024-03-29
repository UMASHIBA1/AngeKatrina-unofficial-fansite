import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { sm_breakpoint } from "../../../../constants/breakpoints";
import {
  ANGE_LIVE_BACK_COLOR,
  GREY_SHADOW_COLOR,
} from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";
import { fadein } from "../../../../styles/commonAnimation";

export interface EmbededBoxProps {
  children: ReactNode;
  title: string;
}

const Wrapper = styled.section<{ isStartAnimation: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  border: 4px solid ${ANGE_LIVE_BACK_COLOR};
  border-radius: 24px;
  overflow-x: hidden;
  padding: 16px 16px 32px 16px;
  box-shadow: 0 10px 20px ${GREY_SHADOW_COLOR};
  opacity: 0;

  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${fadein(1)} ease-in 400ms forwards;
    `}

  @media (min-width: ${sm_breakpoint}px) {
    padding: 16px 16px 64px 16px;
  }
`;

const Title = styled.h1`
  width: 100%;
  font-size: 1.5rem;
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
  margin: 16px 0;
`;

const EmbedContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 24px;
`;

const EmbedBox: React.VFC<EmbededBoxProps> = ({ title, children }) => {
  const [ref, isStartAnimation] = useIntersectionObserver({});

  return (
    <Wrapper ref={ref} isStartAnimation={isStartAnimation}>
      <Title>{title}</Title>
      <EmbedContent>{children}</EmbedContent>
    </Wrapper>
  );
};

export default EmbedBox;
