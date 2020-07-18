import React from "react";
import styled from "styled-components";

const Wrapper = styled.menu`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0;
`;
const SideBarMenu: React.FC = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};

export default SideBarMenu;
