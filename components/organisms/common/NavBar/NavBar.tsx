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
import {
  toUnvisible,
  toVisible,
  translate,
} from "../../../../styles/commonAnimation";
import { tablet_breakpoint } from "../../../../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import NavBarLeft from "./NavBarLeft/NavBarLeft";

const contentData = [
  {
    icon: RedHomeIcon,
    hoveredIcon: WhiteHomeIcon,
    mainText: "ホーム",
    link: "/",
  },
  {
    icon: RedInfoIcon,
    hoveredIcon: WhiteInfoIcon,
    mainText: "アンジュ情報",
    link: "/info",
  },
  {
    icon: RedLicenseIcon,
    hoveredIcon: WhiteLicenseIcon,
    mainText: "ライセンス",
    link: "/",
  },
  {
    icon: RedPresentIcon,
    hoveredIcon: WhitePresentIcon,
    mainText: "ガチャ",
    link: "/gatya",
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const NavWrapper = styled.nav<{ isOpen: boolean; runCloseAnimation: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-right: 0;
  overflow: hidden;
  @media (min-width: ${tablet_breakpoint}px) {
    right: 0;
    left: auto;
    width: 360px;
    ::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      background-color: ${ANGE_LIVE_BACK_COLOR};
      width: 2px;
      height: 100%;
      animation: 200ms ease-in-out both;
      ${({ isOpen }) =>
        isOpen &&
        css`
          animation-name: ${translate({ x: 0, y: "-100%" }, { x: 0, y: 0 })};
          animation-delay: 600ms;
        `}
      ${({ runCloseAnimation }) =>
        runCloseAnimation &&
        css`
          animation-name: ${translate({ x: 0, y: 0 }, { x: 0, y: "100%" })};
        `}
    }
  }
`;

const Wrapper = styled.div<{ isOpen: boolean; runCloseAnimation: boolean }>`
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

    @media (min-width: ${tablet_breakpoint}px) {
    right: 0;
    left: auto;
  }
`;

const NavBar: React.FC<Props> = ({ isOpen, onClose }) => {
  const [runCloseAnimation, changeRunCloseAnimation] = useState(false);
  return (
    <Wrapper isOpen={isOpen} runCloseAnimation={runCloseAnimation}>
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
      <NavBarLeft
        runStartAnimation={isOpen}
        runCloseAnimation={runCloseAnimation}
      />
      <NavWrapper isOpen={isOpen} runCloseAnimation={runCloseAnimation}>
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
    </Wrapper>
  );
};

export default NavBar;
