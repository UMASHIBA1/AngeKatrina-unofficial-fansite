import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { TA_F1_BLOCK_LINE } from "../../../../constants/cssProps";
import { translate, fadein } from "../../../../styles/commonAnimation";

interface LinkProp {
  text: string;
  url: string;
}

interface Props {
  links: LinkProp[];
}

const LinkWrapper = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 18% 14%;
`;

const LinkUl = styled.ul<{ linkNum: number }>`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;
  overflow: hidden;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    animation: ${translate({ x: 0, y: "-100%" }, { x: 0, y: "100%" })}
      ${({ linkNum }) => linkNum * 100 + 300}ms ease-in-out both 400ms;
  }
`;

const LinkLi = styled.li`
  margin: 16px;
  width: 100%;
  overflow: hidden;
`;

const Link = styled.a<{ order: number }>`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  line-height: 1;
  height: 100%;
  color: ${ANGE_LIVE_BACK_COLOR};
  font-size: 32px;
  ${TA_F1_BLOCK_LINE}
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: -100%;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    animation: ${translate({ x: 0, y: 0 }, { x: "200%", y: 0 })} ease-in-out
      300ms both ${({ order }) => order * 100 + 400}ms;
  }
`;

const TextWrapper = styled.div<{ order: number }>`
  opacity: 0;
  animation: ${fadein(1)} ease-in-out 1ms forwards
    ${({ order }) => order * 100 + 550}ms;
`;

const LinkList: React.FC<Props> = ({ links }) => {
  return (
    <LinkWrapper>
      <LinkUl linkNum={links.length}>
        {links.map(({ text, url }, i) => (
          <LinkLi>
            <Link href={url} order={i + 1}>
              <TextWrapper order={i + 1}>{text}</TextWrapper>
            </Link>
          </LinkLi>
        ))}
      </LinkUl>
    </LinkWrapper>
  );
};

export default LinkList;
