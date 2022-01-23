import React from "react";
import styled from "styled-components";
import { ReactNode } from "react";
import {
  ANGE_RED,
  ANGE_WHITE,
  RED_SHADOW_COLOR,
} from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";

export interface ThumbnailLinkProps {
  description: string;
  children: ReactNode;
  link: string;
}

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ANGE_WHITE};
  color: ${ANGE_RED};
  box-shadow: 0 5px 20px ${RED_SHADOW_COLOR};
  border-radius: 20px;
  width: 240px;
  height: 200px;
  overflow: hidden;
  transition: transform 300ms, box-shadow 300ms;

  :hover {
    box-shadow: 0 5px 25px ${RED_SHADOW_COLOR};
    transform: scale(1.1);
  }
`;

const ThumnailArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`;

const Description = styled.p`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  ${BUNKYU_MIDASHI_GO_STD}
  margin: 0;
`;

const ThumbnailLink: React.VFC<ThumbnailLinkProps> = ({
  description,
  link,
  children,
}) => {
  return (
    <Wrapper href={link} target="_blank" rel="noopener noreferrer">
      <ThumnailArea>{children}</ThumnailArea>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default ThumbnailLink;
