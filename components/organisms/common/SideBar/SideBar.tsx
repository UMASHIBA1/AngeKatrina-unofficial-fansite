import React, { useState } from "react";
import SideBarBG from "./SideBarBG";
import useDidMount from "../../../../hooks/useDidMount";
import SideBarCloseButton from "./SideBarTopBar/SideBarCloseButton";
import SideBarTopBar from "./SideBarTopBar/SideBarTopBar";

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
        <SideBarCloseButton
          onClickFC={() => {
            changeIsOpenSideBar(false);
          }}
        />
      </SideBarTopBar>
    </SideBarBG>
  );
};

export default SideBar;
