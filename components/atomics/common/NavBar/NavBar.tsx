import React from "react";
import styled from "styled-components";
import ExpandCircle from "./ExpandCircle";

interface Props {
  isOpen: boolean;
  changeIsClose: () => void;
}

const NavWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const NavBar: React.FC = () => {
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
    </NavWrapper>
  );
};

export default NavBar;
