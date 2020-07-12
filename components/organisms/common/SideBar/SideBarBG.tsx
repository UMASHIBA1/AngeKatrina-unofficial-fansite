import React, { ReactNode } from "react";
import styled from "styled-components";
import { ANGE_WHITE } from "../../../../constants/colors";
import { sideBarZIndex } from "../../../../constants/home/zindex";
import { bounceToX } from "../../../../styles/commonAnimation";

interface Props {
  isOpenSideBar: boolean;
  children: ReactNode;
}

const SideBarBGMain = styled.div<{ isOpenSideBar: boolean }>`
  position: fixed;
  transform: translate(100%, 0);
  z-index: ${sideBarZIndex};
  background-color: ${ANGE_WHITE};
  width: 150%;
  height: 150%;
  animation: ${({ isOpenSideBar }) =>
      isOpenSideBar ? bounceToX("100%", "0", "5%") : "none"}
    400ms cubic-bezier(0, 0.01, 0.74, 1.53) forwards;
`;

const SideBarBG: React.FC<Props> = ({ isOpenSideBar, children }: Props) => {
  return (
    <SideBarBGMain isOpenSideBar={isOpenSideBar}>{children}</SideBarBGMain>
  );
};

export default SideBarBG;
