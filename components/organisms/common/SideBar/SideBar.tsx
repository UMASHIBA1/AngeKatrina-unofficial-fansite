import React, { useState } from "react";
import SideBarBG from "./SideBarBG";
import useDidMount from "../../../../hooks/useDidMount";
import CloseButton from "../../../atomics/common/CloseButton";
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
        <CloseButton
          onClickFC={() => {
            changeIsOpenSideBar(false);
          }}
          right="10px"
        />
      </SideBarTopBar>
    </SideBarBG>
  );
};

export default SideBar;
