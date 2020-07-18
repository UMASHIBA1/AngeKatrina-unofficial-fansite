import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../../constants/colors";

const TopBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  border-bottom: 2px solid ${ANGE_LIVE_BACK_COLOR};
`;

const SideBarTopBar: React.FC = (props) => {
  return <TopBar>{props.children}</TopBar>;
};

export default SideBarTopBar;
