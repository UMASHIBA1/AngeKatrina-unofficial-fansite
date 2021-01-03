import React, { useState } from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../../constants/colors";
import useDidMount from "../../../../../hooks/useDidMount";
import { translate } from "../../../../../styles/commonAnimation";
import CloseButton from "../../../../atomics/common/CloseButton/CloseButton";
import NavBarTitle from "./NavBarTitle";

const baseDelay = 550;

const TopBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;

  ::after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    animation: ${translate({ x: "-100%", y: 0 }, { x: 0, y: 0 })} 100ms
      ease-in-out both ${baseDelay + 50}ms;
  }
`;

const NavBarTop: React.FC = (props) => {
  const [isOpenSideBar, changeIsOpenSideBar] = useState(false);

  useDidMount(() => {
    setTimeout(() => {
      changeIsOpenSideBar(true);
    }, 1000);
  });

  return (
    <TopBar>
      <NavBarTitle text="どれにする？" color={ANGE_LIVE_BACK_COLOR} />
      <CloseButton
        onClickFC={() => {
          changeIsOpenSideBar(false);
        }}
        right="10px"
      />
    </TopBar>
  );
};

export default NavBarTop;
