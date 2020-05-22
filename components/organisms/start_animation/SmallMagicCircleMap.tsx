import React from "react";
import styled from "styled-components";
import SmallMagicCircle from "../../molecules/start_animation/SmallMagicCircle";
import { useTypedSelector } from "../../../redux/store";
import { smallMagicCircleMapZIndex } from "../../../constants/start_animation/zindex";
import { SmallMagicCircleProps } from "../../molecules/start_animation/SmallMagicCircle";

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: ${smallMagicCircleMapZIndex};
`;

type SmallMagicCirclePropsData = Omit<
  SmallMagicCircleProps,
  "isStartSummonAnimation"
>;

const SMVerData: SmallMagicCirclePropsData[] = [
  { top: -250, left: 60, diameter: 80, circleNum: 3 },
  { top: -300, left: -70, diameter: 50, circleNum: 3 },
  { top: -200, left: -80, diameter: 30, circleNum: 2 },
  { top: 300, left: 160, diameter: 100, circleNum: 3 },
  { top: 200, left: 70, diameter: 40, circleNum: 2 },
  { top: 200, left: -100, diameter: 70, circleNum: 3 },
  { top: 350, left: -70, diameter: 40, circleNum: 3 },
];

const TabletVerData: SmallMagicCirclePropsData[] = [
  { top: -300, left: -200, diameter: 80, circleNum: 3 },
  { top: -370, left: 200, diameter: 100, circleNum: 2 },
  { top: -160, left: 370, diameter: 70, circleNum: 3 },
  { top: -380, left: -390, diameter: 120, circleNum: 3 },
  { top: -100, left: -300, diameter: 60, circleNum: 3 },
  { top: 130, left: 320, diameter: 60, circleNum: 3 },
  { top: 360, left: 300, diameter: 140, circleNum: 3 },
  { top: 280, left: -200, diameter: 100, circleNum: 3 },
  { top: 380, left: -30, diameter: 60, circleNum: 3 },
];

const PCVerData: SmallMagicCirclePropsData[] = [
  { top: -400, left: -230, diameter: 100, circleNum: 3 },
  { top: -300, left: -500, diameter: 150, circleNum: 3 },
  { top: -430, left: -700, diameter: 80, circleNum: 3 },
  { top: -100, left: -600, diameter: 60, circleNum: 3 },
  { top: -300, left: -800, diameter: 80, circleNum: 3 },
  { top: -50, left: -850, diameter: 160, circleNum: 3 },
  { top: 130, left: -800, diameter: 50, circleNum: 3 },
  { top: 340, left: -870, diameter: 100, circleNum: 3 },
  { top: 40, left: -500, diameter: 80, circleNum: 3 },
  { top: 460, left: -700, diameter: 80, circleNum: 3 },
  { top: 200, left: -600, diameter: 130, circleNum: 3 },
  { top: 400, left: -400, diameter: 100, circleNum: 3 },
  { top: 470, left: -100, diameter: 100, circleNum: 3 },
  { top: -450, left: 200, diameter: 120, circleNum: 3 },
  { top: -400, left: 400, diameter: 50, circleNum: 3 },
  { top: -420, left: 700, diameter: 160, circleNum: 3 },
  { top: -200, left: 500, diameter: 120, circleNum: 3 },
  { top: 100, left: 670, diameter: 120, circleNum: 3 },
  { top: -100, left: 600, diameter: 70, circleNum: 3 },
  { top: 0, left: 460, diameter: 100, circleNum: 3 },
  { top: 300, left: 500, diameter: 200, circleNum: 3 },
  { top: 400, left: 650, diameter: 60, circleNum: 3 },
  { top: -220, left: 800, diameter: 140, circleNum: 3 },
  { top: 0, left: 840, diameter: 80, circleNum: 3 },
  { top: 300, left: 820, diameter: 100, circleNum: 3 },
  { top: 450, left: 260, diameter: 100, circleNum: 3 },
];

const SmallMagicCircleMap: React.FC = () => {
  const [size, isStartSummonAnimation] = useTypedSelector((state) => [
    state.sizes,
    state.isStartSummonAnimation,
  ]);

  let SmallMagicCirclePropData: SmallMagicCirclePropsData[];
  if (size === "sm") {
    SmallMagicCirclePropData = SMVerData;
  } else if (size === "tablet") {
    SmallMagicCirclePropData = TabletVerData;
  } else {
    SmallMagicCirclePropData = PCVerData;
  }

  return (
    <Wrapper>
      {SmallMagicCirclePropData.map(({ top, left, diameter, circleNum }) => (
        <SmallMagicCircle
          top={top}
          left={left}
          diameter={diameter}
          circleNum={circleNum}
          isStartSummonAnimation={isStartSummonAnimation}
        />
      ))}
    </Wrapper>
  );
};

export default SmallMagicCircleMap;
