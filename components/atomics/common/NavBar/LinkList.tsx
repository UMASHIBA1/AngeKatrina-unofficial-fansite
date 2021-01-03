import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { TA_F1_BLOCK_LINE } from "../../../../constants/cssProps";

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
  padding: 10%;
`;

const LinkUl = styled.ul`
  display: grid;
  justify-content: center;
`;

const LinkLi = styled.li`
  margin: 12px 0;
`;

const Link = styled.a`
  width: 100%;
  height: 100%;
  color: ${ANGE_LIVE_BACK_COLOR};
  font-size: 32px;
  ${TA_F1_BLOCK_LINE}
`;

const LinkList: React.FC<Props> = ({ links }) => {
  return (
    <LinkWrapper>
      <LinkUl>
        {links.map(({ text, url }) => (
          <LinkLi>
            <Link href={url}>{text}</Link>
          </LinkLi>
        ))}
      </LinkUl>
    </LinkWrapper>
  );
};

export default LinkList;
