import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { tablet_breakpoint } from "../../../../../constants/breakpoints";
import NavBarCrossMarks from "../NavBarCrossMarks";
import NavBarRings from "../NavBarRings";
import NavBarSidewaysLines from "../NavBarSidewaysLines";
import NavBarTriangles from "../NavBarTriangles";
import CenterCircle from "./CenterCircle/CenterCircle";
import CloseAnimation from "./CloseAnimation";
import ThreeSlashes from "./ThreeSlashes/ThreeSlashes";

interface Props {
  runStartAnimation: boolean;
  runCloseAnimation: boolean;
}

const Wrapper = styled.div`
  display: none;
  @media (min-width: ${tablet_breakpoint}px) {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: calc(100% - 360px);
    height: 100%;
  }
`;

const useIsShowingMark = (runStartAnimation: boolean) => {
  const [isHide, changeIsHide] = useState(true);

  const toHide = () => {
    changeIsHide(true);
  };

  useEffect(() => {
    if (runStartAnimation) {
      changeIsHide(false);
    }
  }, [runStartAnimation]);

  return [runStartAnimation || !isHide, toHide] as [boolean, () => void];
};

const NavBarLeft: React.VFC<Props> = ({
  runStartAnimation,
  runCloseAnimation,
}) => {
  const [isShowingMark, hideMarks] = useIsShowingMark(runStartAnimation);

  return (
    <Wrapper>
      <ThreeSlashes runStartAnimation={isShowingMark} />
      <CenterCircle runStartAnimation={isShowingMark} />
      <NavBarRings runStartAnimation={isShowingMark} />
      <NavBarCrossMarks runStartAnimation={isShowingMark} />
      <NavBarSidewaysLines runStartAnimation={isShowingMark} />
      <NavBarTriangles runStartAnimation={isShowingMark} />
      <CloseAnimation
        runCloseAnimation={runCloseAnimation}
        onHideNavBarLeft={hideMarks}
      />
    </Wrapper>
  );
};

export default NavBarLeft;
