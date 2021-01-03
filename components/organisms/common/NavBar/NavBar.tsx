import React, { useState } from "react";
import styled, { css } from "styled-components";
import ExpandCircle from "./ExpandCircle";
import NavBarTop from "./NavBarTop/NavBarTop";
import RedHomeIcon from "../../../../public/svgs/common/red-homeIcon.svg";
import RedInfoIcon from "../../../../public/svgs/common/red-infoIcon.svg";
import RedLicenseIcon from "../../../../public/svgs/common/red-licenseIcon.svg";
import RedPresentIcon from "../../../../public/svgs/common/red-presentIcon.svg";
import WhiteHomeIcon from "../../../../public/svgs/common/white-homeIcon.svg";
import WhiteInfoIcon from "../../../../public/svgs/common/white-infoIcon.svg";
import WhiteLicenseIcon from "../../../../public/svgs/common/white-licenseIcon.svg";
import WhitePresentIcon from "../../../../public/svgs/common/white-presentIcon.svg";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import { navBarZindex } from "../../../../constants/zindex";
import { toUnvisible, toVisible } from "../../../../styles/commonAnimation";

const contentData = [
  {
    icon: RedHomeIcon,
    hoveredIcon: WhiteHomeIcon,
    mainText: "ホーム",
  },
  {
    icon: RedInfoIcon,
    hoveredIcon: WhiteInfoIcon,
    mainText: "アンジュ情報",
  },
  {
    icon: RedLicenseIcon,
    hoveredIcon: WhiteLicenseIcon,
    mainText: "ライセンス",
  },
  {
    icon: RedPresentIcon,
    hoveredIcon: WhitePresentIcon,
    mainText: "ガチャ",
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NavWrapper = styled.div<{ isOpen: boolean; runCloseAnimation: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${navBarZindex};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  ${({ isOpen, runCloseAnimation }) =>
    !isOpen &&
    !runCloseAnimation &&
    css`
      visibility: hidden;
    `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      visibility: hidden;
      animation: ${toVisible} 1ms forwards linear 0ms;
    `}
  ${({ runCloseAnimation }) =>
    runCloseAnimation &&
    css`
      visibility: visible;
      animation: ${toUnvisible} 1ms forwards linear 1000ms;
    `}
`;

const NavBar: React.FC<Props> = ({ isOpen, onClose }) => {
  const [runCloseAnimation, changeRunCloseAnimation] = useState(false);
  return (
    <NavWrapper isOpen={isOpen} runCloseAnimation={runCloseAnimation}>
      <ExpandCircle
        color="red"
        place="topRight"
        runCloseAnimation={runCloseAnimation}
        runStartAnimation={isOpen}
        animationOrder="first"
        onAnimationEnd={() => {
          console.log("run close red");
          changeRunCloseAnimation(false);
        }}
      />
      <ExpandCircle
        color="white"
        place="bottomLeft"
        runCloseAnimation={runCloseAnimation}
        runStartAnimation={isOpen}
        animationOrder="second"
      />
      <NavBarTop
        runStartAnimation={isOpen}
        onClose={() => {
          onClose();
          changeRunCloseAnimation(true);
        }}
        runCloseAnimation={runCloseAnimation}
      />
      <NavBarMenu
        runStartAnimation={isOpen}
        runCloseAnimation={runCloseAnimation}
        contentDataList={contentData}
      />
    </NavWrapper>
  );
};

export default NavBar;
