import React, { useState } from "react";
import SideBarBG from "./SideBarBG";
import useDidMount from "../../../../hooks/useDidMount";

const SideBar: React.FC = () => {
  const [isOpenSideBar, changeIsOpenSideBar] = useState(false);

  useDidMount(() => {
    setTimeout(() => {
      changeIsOpenSideBar(true);
    }, 1000);
  });

  return <SideBarBG isOpenSideBar={isOpenSideBar}>{/*  */}</SideBarBG>;
};

export default SideBar;
