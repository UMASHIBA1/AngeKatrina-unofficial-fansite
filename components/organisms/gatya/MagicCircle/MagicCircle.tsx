import React from "react";
import styled from "styled-components";
import SingleMagicCircle from "../../../atomics/gatya/SingleMagicCircleTmp";
import SummonText from "./SummonText";
import { useTypedSelector, DispatchType } from "../../../../redux/store";
import { SizeType } from "../../../../typing/SizeType";
import { magicCircleZIndex } from "../../../../constants/gatya/zindex";
import { useDispatch } from "react-redux";
import { startSummonAnimation } from "../../../../redux/modules/isStartSummonAnimation";
import sizeTypeJudge from "../../../../systems/sizeTypeJudge";

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: ${magicCircleZIndex};
`;

const judgeEachDiameter = (size: SizeType) => {
  return sizeTypeJudge(size)(
    {
      mostInDiameter: 120,
      SecondInDiameter: 160,
      ThirdInDiameter: 210,
      FourthInDiameter: 280,
      summonTextDiameter: 100,
    },
    {
      mostInDiameter: 190,
      SecondInDiameter: 250,
      ThirdInDiameter: 320,
      FourthInDiameter: 430,
      summonTextDiameter: 150,
    },
    {
      mostInDiameter: 350,
      SecondInDiameter: 450,
      ThirdInDiameter: 580,
      FourthInDiameter: 780,
      summonTextDiameter: 280,
    }
  );
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
        top={`calc(50% - ${mostInDiameter / 2}px)`}
        left={`calc(50% - ${mostInDiameter / 2}px)`}
        isStartSummonAnimation={isStartSummonAnimation}
        svgName="mostIn"
        diameter={mostInDiameter}
        rotateDirection="right"
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        top={`calc(50% - ${mostInDiameter / 2}px)`}
        left={`calc(50% - ${mostInDiameter / 2}px)`}
        isStartSummonAnimation={isStartSummonAnimation}
        svgName="mostIn"
        diameter={mostInDiameter}
        rotateDirection="right"
        scaleMagnification={size === "sm" ? 2.15 : 2.0}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        top={`calc(50% - ${SecondInDiameter / 2}px)`}
        left={`calc(50% - ${SecondInDiameter / 2}px)`}
        isStartSummonAnimation={isStartSummonAnimation}
        svgName="secondIn"
        diameter={SecondInDiameter}
        rotateDirection="left"
        scaleMagnification={1.1}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        top={`calc(50% - ${SecondInDiameter / 2}px)`}
        left={`calc(50% - ${SecondInDiameter / 2}px)`}
        isStartSummonAnimation={isStartSummonAnimation}
        svgName="secondIn"
        diameter={SecondInDiameter}
        rotateDirection="left"
        scaleMagnification={2.2}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        top={`calc(50% - ${ThirdInDiameter / 2}px)`}
        left={`calc(50% - ${ThirdInDiameter / 2}px)`}
        isStartSummonAnimation={isStartSummonAnimation}
        svgName="thirdIn"
        diameter={ThirdInDiameter}
        rotateDirection="right"
        scaleMagnification={2.4}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        top={`calc(50% - ${ThirdInDiameter / 2}px)`}
        left={`calc(50% - ${ThirdInDiameter / 2}px)`}
        isStartSummonAnimation={isStartSummonAnimation}
        svgName="thirdIn"
        diameter={ThirdInDiameter}
        rotateDirection="right"
        scaleMagnification={4.8}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        top={`calc(50% - ${FourthInDiameter / 2}px)`}
        left={`calc(50% - ${FourthInDiameter / 2}px)`}
        isStartSummonAnimation={isStartSummonAnimation}
        svgName="fourthIn"
        diameter={FourthInDiameter}
        rotateDirection="left"
        scaleMagnification={2.85}
        doAnimations={runAnimations}
      />
      <SingleMagicCircle
        top={`calc(50% - ${FourthInDiameter / 2}px)`}
        left={`calc(50% - ${FourthInDiameter / 2}px)`}
        isStartSummonAnimation={isStartSummonAnimation}
        svgName="fourthIn"
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
