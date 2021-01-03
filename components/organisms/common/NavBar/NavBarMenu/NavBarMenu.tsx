import React from "react";
import styled from "styled-components";
import { fadein } from "../../../../../styles/commonAnimation";

const Wrapper = styled.menu`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0;
  opacity: 0;
  animation: ${fadein(1)} 1ms forwards linear 550ms;
`;
const NavBarMenu: React.FC = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default NavBarMenu;
