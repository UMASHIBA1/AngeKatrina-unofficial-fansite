import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../components/atomics/common/Logo";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../constants/colors";

const OGPPage = styled.main`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const BorderWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${ANGE_WHITE} 6px solid;
  border-radius: 4px;
  overflow: hidden;
`;

const LogoWrapper = styled.div`
  width: 50%;
  margin-bottom: 5%;
  margin-right: 5%;
`;

const paused = "paused";
const running = "running";

// type PlayState = typeof paused | typeof running;

// TODO: 動的なOGPを作ろうとしたんですが現在WIPです。
const OGP: React.VFC = () => {
  // const [animationPlayState, changeAnimationPlayState] = useState<PlayState>(
  //   paused
  // );
  return (
    <OGPPage>
      <BorderWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </BorderWrapper>
    </OGPPage>
  );
};

export default OGP;
