import React from "react";
import MostIn from "../../../public/start_animation/svgs/most_in.svg";
import SecondIn from "../../../public/start_animation/svgs/second_in.svg";
import ThirdIn from "../../../public/start_animation/svgs/third_in.svg";
import FourthIn from "../../../public/start_animation/svgs/fourth_in.svg";
import styled from "styled-components";
import SingleMagicCircle from "../../atomics/start_animation/SingleMagicCircle";
import SummonText from "../../atomics/start_animation/SummonText";
import { useTypedSelector, DispatchType } from "../../../redux/store";
import { SizeType } from "../../../typing/SizeType";
import { magicCircleZIndex } from "../../../constants/start_animation/zindex";
import { useDispatch } from "react-redux";
import { startSummonAnimation } from "../../../redux/modules/isStartSummonAnimation";
import {
  smSummonTextDiameter,
  tabletSummonTextDiameter,
  pcSummonTextDiameter,
} from "../../../constants/start_animation/diameters";
import sizeTypeJudge from "../../../systems/sizeTypeJudge";

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: ${magicCircleZIndex};
`;

const judgeEachDiameter = (size: SizeType) => {
  return sizeTypeJudge(size)({
    sm: {
      mostInDiameter: 120,
      SecondInDiameter: 200,
      ThirdInDiameter: 280,
      FourthInDiameter: 360,
      summonTextDiameter: smSummonTextDiameter,
    },
    tablet: {
      mostInDiameter: 220,
      SecondInDiameter: 350,
      ThirdInDiameter: 450,
      FourthInDiameter: 570,
      summonTextDiameter: tabletSummonTextDiameter,
    },
    pc: {
      mostInDiameter: 350,
      SecondInDiameter: 550,
      ThirdInDiameter: 700,
      FourthInDiameter: 900,
      summonTextDiameter: pcSummonTextDiameter,
    },
  });
};

const MagicCircle: React.FC = () => {
  const [size, isStartSummonAnimation] = useTypedSelector((state) => [
    state.sizes,
    state.isStartSummonAnimation,
  ]);
  const dispatch: DispatchType = useDispatch();
  const {
    mostInDiameter,
    SecondInDiameter,
    ThirdInDiameter,
    FourthInDiameter,
    summonTextDiameter,
  } = judgeEachDiameter(size);

  const initSummonAnimation = () => {
    dispatch(startSummonAnimation());
  };

  const runAnimations = {
    doShadow: true,
    doExpand: true,
    doFadeout: false,
  };

  return (
    <Wrapper>
      <SingleMagicCircle
        isStartSummonAnimation={isStartSummonAnimation}
        SvgElement={MostIn}
        diameter={mostInDiameter}
        rotateDirection="right"
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isStartSummonAnimation}
        SvgElement={MostIn}
        diameter={mostInDiameter}
        rotateDirection="right"
        scaleMagnification={size === "sm" ? 2.15 : 2.0}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isStartSummonAnimation}
        SvgElement={SecondIn}
        diameter={SecondInDiameter}
        rotateDirection="left"
        scaleMagnification={1.1}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isStartSummonAnimation}
        SvgElement={SecondIn}
        diameter={SecondInDiameter}
        rotateDirection="left"
        scaleMagnification={2.2}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isStartSummonAnimation}
        SvgElement={ThirdIn}
        diameter={ThirdInDiameter}
        rotateDirection="right"
        scaleMagnification={2.4}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isStartSummonAnimation}
        SvgElement={ThirdIn}
        diameter={ThirdInDiameter}
        rotateDirection="right"
        scaleMagnification={4.8}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isStartSummonAnimation}
        SvgElement={FourthIn}
        diameter={FourthInDiameter}
        rotateDirection="left"
        scaleMagnification={2.85}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        isStartSummonAnimation={isStartSummonAnimation}
        SvgElement={FourthIn}
        diameter={FourthInDiameter}
        rotateDirection="left"
        scaleMagnification={5.8}
        doAnimations={runAnimations}
      />
      <SummonText
        diameter={summonTextDiameter}
        isPushedButton={isStartSummonAnimation}
        onClickFC={initSummonAnimation}
      />
    </Wrapper>
  );
};

export default MagicCircle;
