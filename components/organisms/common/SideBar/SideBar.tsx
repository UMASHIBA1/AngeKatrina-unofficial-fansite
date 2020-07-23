import React, { useState } from "react";
import SideBarBG from "./SideBarBG";
import useDidMount from "../../../../hooks/useDidMount";
import CloseButton from "../../../atomics/common/CloseButton/CloseButton";
import SideBarTopBar from "./SideBarTopBar/SideBarTopBar";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import SlideBarTitle from "./SideBarTopBar/SideBarTitle";
import SideBarMenu from "./SideBarMenu/SideBarMenu";

const SideBar: React.FC = () => {
  const [isOpenSideBar, changeIsOpenSideBar] = useState(false);

  useDidMount(() => {
    setTimeout(() => {
      changeIsOpenSideBar(true);
    }, 1000);
  });

  return (
    <SideBarBG isOpenSideBar={isOpenSideBar}>
      <SideBarTopBar>
        <SlideBarTitle text="どれにする？" color={ANGE_LIVE_BACK_COLOR} />
        <CloseButton
          onClickFC={() => {
            changeIsOpenSideBar(false);
          }}
          right="10px"
        />
      </SideBarTopBar>
      <SideBarMenu></SideBarMenu>
    </SideBarBG>
  );
};

export default SideBar;
