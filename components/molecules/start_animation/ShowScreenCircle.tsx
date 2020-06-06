import styled, { keyframes } from "styled-components";
import WhiteCircle from "../../atomics/start_animation/WhiteCircle";
import { fadein } from "../../../styles/commonAnimation";
import { showAngeCardOrder } from "../../../constants/start_animation/animation_order";

interface Props {
  isStartAnimation: boolean;
  scale: number;
  blur: string;
  opacity: number;
}

const showScreenCircleAnimation = (
  scale: Props["scale"],
  opacity: Props["opacity"]
) => keyframes`
  0% {
  transform: translate(calc(-100px / 2), calc(-100px / 2)) scale(${scale}) rotate(0deg);
  opacity: 1;
  }

  100% {
    transform: translate(calc(-100px / 2), calc(-100px / 2)) scale(0.000001) rotate(0deg);
    opacity: ${opacity};
  }
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
`;

const ShowScreenCircleMain = styled(WhiteCircle)<Props>`
  position: absolute;
  width: 100px;
  height: 100px;
  filter: blur(${({ blur }) => blur});
  // margin: calc(-${({ blur }) => blur} * 2);
  opacity: 0;
  animation: ${({ isStartAnimation }) => (isStartAnimation ? fadein() : "none")}
      0ms ease-out ${showAngeCardOrder.delay_ms}ms forwards,
    ${({ isStartAnimation, scale, opacity }) =>
      isStartAnimation ? showScreenCircleAnimation(scale, opacity) : "none"}
      ${showAngeCardOrder.duration_ms}ms linear ${showAngeCardOrder.delay_ms}ms
      forwards;
`;

const ShowScreenCircle: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <ShowScreenCircleMain {...props} />
    </Wrapper>
  );
};

export default ShowScreenCircle;
