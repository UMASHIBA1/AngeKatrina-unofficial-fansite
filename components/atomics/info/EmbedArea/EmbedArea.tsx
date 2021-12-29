import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

export interface EmbededAreaProps {
  children: ReactNode;
  title: string;
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  border: 4px solid ${ANGE_LIVE_BACK_COLOR};
  border-radius: 24px;
  overflow-x: hidden;
  padding: 16px;

  @media (min-width: ${sm_breakpoint}px) {
    margin: 0 48px;
  }

  @media (min-width: ${tablet_breakpoint}px) {
    margin: 0 64px;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 24px;
`;

const EmbedArea: React.VFC<EmbededAreaProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <EmbedContent>{children}</EmbedContent>
    </Wrapper>
  );
};

export default EmbedArea;
