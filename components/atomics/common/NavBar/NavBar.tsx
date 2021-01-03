import React from "react";
import styled from "styled-components";
import ExpandCircle from "./ExpandCircle";
import LinkList from "./LinkList";

interface LinkProp {
  text: string;
  url: string;
}

interface Props {
  links: LinkProp[];
  isOpen: boolean;
  changeIsClose: () => void;
}

const NavWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const NavBar: React.FC<Props> = () => {
  return (
    <NavWrapper>
      <ExpandCircle
        color="red"
        place="topRight"
        isStartAnimation={true}
        animationOrder="first"
      />
      <ExpandCircle
        color="white"
        place="bottomLeft"
        isStartAnimation={true}
        animationOrder="second"
      />
      <LinkList
        links={[
          {
            text: "にゃーん!",
            url: "exaple.com",
          },
          {
            text: "日本語にゃーん",
            url: "example.com",
          },
          {
            text: "ガチャ",
            url: "example.com",
          },
        ]}
      />
    </NavWrapper>
  );
};

export default NavBar;
