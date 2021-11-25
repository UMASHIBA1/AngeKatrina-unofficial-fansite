import styled, { css } from "styled-components";
import Triagnle from "../../../atomics/common/Triangle/Triangle";

interface Props {
  runStartAnimation: boolean;
}

const animationBaseDelay = 500;

const Wrapper = styled.div<{ runStartAnimation: Props["runStartAnimation"] }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  ${({ runStartAnimation }) =>
    !runStartAnimation &&
    css`
      display: none;
    `}
`;

const NavBarTriangles: React.VFC<Props> = ({ runStartAnimation }) => {
  return (
    <Wrapper runStartAnimation={runStartAnimation}>
      <Triagnle
        color="red"
        rotate="50deg"
        bottom="57%"
        left="20%"
        width="22%"
        animation="boundExpand"
        animationDelayMs={animationBaseDelay + 200}
      />
      <Triagnle
        color="yellow"
        rotate="90deg"
        bottom="20%"
        left="40%"
        width="15%"
        animation="boundExpand"
        animationDelayMs={animationBaseDelay + 100}
      />
      <Triagnle
        color="black"
        rotate="100deg"
        bottom="55%"
        left="48%"
        width="6%"
        animation="boundExpand"
        animationDelayMs={animationBaseDelay}
      />
    </Wrapper>
  );
};

export default NavBarTriangles;
