import React, { useState } from "react";
import SideBarBG from "./SideBarBG";
import useDidMount from "../../../../hooks/useDidMount";
import SideBarCloseButton from "./SideBarCloseButton";

const SideBar: React.FC = () => {
  const [isOpenSideBar, changeIsOpenSideBar] = useState(false);

  useDidMount(() => {
    setTimeout(() => {
      changeIsOpenSideBar(true);
    }, 1000);
  });

  return (
    <SideBarBG isOpenSideBar={isOpenSideBar}>
      <SideBarCloseButton
        onClickFC={() => {
          changeIsOpenSideBar(false);
        }}
      />
    </SideBarBG>
  );
};

export default SideBar;
