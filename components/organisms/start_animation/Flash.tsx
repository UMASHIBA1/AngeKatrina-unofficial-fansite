import React from "react";
import styled from "styled-components";
import { fadein } from "../../../styles/commonAnimation";
import { flashOrder } from "../../../constants/start_animation/animation_order";
import { flashZIndex } from "../../../constants/start_animation/zindex";
import { useTypedSelector } from "../../../redux/store";

const Wrapper = styled.div<{ isStartAnimation: boolean }>`
  position: absolute;
  z-index: ${({ isStartAnimation }) => (isStartAnimation ? flashZIndex : "0")};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
`;

const FlashMain = styled.div<{
  isStartAnimation: boolean;
  diameter: string;
  blur: string;
}>`
  position: absolute;
  width: ${({ diameter }) => diameter};
  height: ${({ diameter }) => diameter};
  border-radius: 50%;
  transform: translate(calc(${({ diameter }) => diameter} / 2), calc(${({
  diameter,
}) => diameter} / 2));
  filter: blur(${({ blur }) => blur});
  background-color: #ffffff;
//   animation: ${({ isStartAnimation }) =>
  isStartAnimation ? fadein() : "none"}
//     ${flashOrder.duration_ms}ms ease-out ${flashOrder.delay_ms}ms forwards;
`;

const Flash: React.FC = () => {
  const isStartAnimation = useTypedSelector(
    (state) => state.isStartSummonAnimation
  );
  return (
    <Wrapper isStartAnimation={isStartAnimation}>
      <FlashMain
        isStartAnimation={isStartAnimation}
        diameter="200px"
        blur="100px"
      />
      <FlashMain
        isStartAnimation={isStartAnimation}
        diameter="200px"
        blur="50px"
      />
      <FlashMain
        isStartAnimation={isStartAnimation}
        diameter="200px"
        blur="25px"
      />
    </Wrapper>
  );
};

export default Flash;
