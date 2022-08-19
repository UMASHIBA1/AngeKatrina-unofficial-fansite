import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import Anime1 from "../components/organisms/startAnimation/Anime1/Anime1";
import Anime2 from "../components/organisms/startAnimation/Anime2/Anime2";
import Anime3 from "../components/organisms/startAnimation/Anime3/Anime3";
import Loading from "../components/organisms/startAnimation/Loading/Loading";
import LoadingToAnime1 from "../components/organisms/startAnimation/LoadingToAnime1/LoadingToAnime1";
import { sm_breakpoint } from "../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../constants/cssProps";
import { toAfterRun } from "../redux/modules/startAnimation";
import { DispatchType } from "../redux/store";

type animationKind =
  | "loading"
  | "loadingToAnime1"
  | "anime1"
  | "anime2"
  | "anime3";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const SkipButton = styled.button<{
  nowAnimationKind: "loading" | "loadingToAnime1";
}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${ANGE_WHITE};
  transform: scale(1);
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
  cursor: pointer;
  bottom: 32px;
  right: 24px;
  font-size: 1.2rem;
  padding: 12px 32px;
  border-radius: 12px;
  border: 4px double ${ANGE_LIVE_BACK_COLOR};
  @media (min-width: ${sm_breakpoint}px) {
    bottom: 64px;
    right: 48px;
    font-size: 2rem;
    padding: 12px 48px;
    border-radius: 24px;
    border: 8px double ${ANGE_LIVE_BACK_COLOR};
  }

  ${({ nowAnimationKind }) =>
    nowAnimationKind === "loading" &&
    css`
      transition: transform 200ms ease-out;
      :hover {
        transform: scale(1.2);
      }
    `}

  ${({ nowAnimationKind }) =>
    nowAnimationKind === "loadingToAnime1" &&
    css`
      transition: transform 300ms 1200ms cubic-bezier(0.25, -1.2, 1, 0.5);
      transform: scale(0);
    `}
`;

const useAnimations = () => {
  const [animationKind, changeAnimationKind] = useState<animationKind>(
    "loading"
  );

  const toNextAnimation = () => {
    switch (animationKind) {
      case "loading":
        changeAnimationKind("loadingToAnime1");
        break;
      case "loadingToAnime1":
        changeAnimationKind("anime1");
        break;
      case "anime1":
        changeAnimationKind("anime2");
        break;
      case "anime2":
        changeAnimationKind("anime3");
        break;
    }
  };

  return [animationKind, toNextAnimation] as [
    typeof animationKind,
    typeof toNextAnimation
  ];
};

const StartAnimation: React.VFC = () => {
  const [animationKind, toNextAnimation] = useAnimations();
  const router = useRouter();
  const dispatch: DispatchType = useDispatch();

  return (
    <Wrapper>
      <LoadingToAnime1
        toNextAnimation={toNextAnimation}
        isStartAnimation={
          animationKind === "loadingToAnime1" || animationKind === "anime1"
        }
      />

      <Anime1
        isStartAnimation={animationKind === "anime1"}
        toNextAnimation={toNextAnimation}
      />
      <Anime2
        mode={animationKind === "anime2" ? "main" : "background"}
        isStartAnimation={
          animationKind === "anime2" || animationKind === "anime3"
        }
        toNextAnimation={toNextAnimation}
      />
      <Anime3
        isStartAnimation={animationKind === "anime3"}
        onFinishAnimation={() => router.push("/")}
      />
      <Loading toNextAnimation={toNextAnimation} />
      {(animationKind === "loading" || animationKind === "loadingToAnime1") && (
        <SkipButton
          onClick={() => {
            dispatch(toAfterRun());
            router.push("/");
          }}
          nowAnimationKind={animationKind}
        >
          SKIP！
        </SkipButton>
      )}
    </Wrapper>
  );
};

export default StartAnimation;
