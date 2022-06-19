import React, { useState } from "react";
import styled from "styled-components";
import Anime1 from "../components/organisms/startAnimation/Anime1/Anime1";
import Loading from "../components/organisms/startAnimation/Loading/Loading";
import LoadingToAnime1 from "../components/organisms/startAnimation/LoadingToAnime1/LoadingToAnime1";

type animationKind = "loading" | "loadingToAnime1" | "anime1" | "anime2";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
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
        // TODO: 次のアニメーションへ
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
      <Loading toNextAnimation={toNextAnimation} />
    </Wrapper>
  );
};

export default StartAnimation;
