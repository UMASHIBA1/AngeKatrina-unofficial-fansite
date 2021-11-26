import styled, { css } from "styled-components";
import SidewaysLines from "../../../atomics/common/SidewaysLines/SidewaysLines";

const sidewayBaseDelay = 400;

interface Props {
  runStartAnimation: boolean;
}

const Wrapper = styled.div<{ runStartAnimation: Props["runStartAnimation"] }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  ${({ runStartAnimation }) =>
    !runStartAnimation &&
    css`
      display: none;
    `}

  > div {
    position: absolute;
    :first-child {
      top: 7%;
      left: 8%;
    }

    :nth-child(2) {
      top: 28%;
      left: 58%;
    }

    :nth-child(3) {
      top: 60%;
      left: 30%;
    }
  }
`;

const NavBarSidewaysLines: React.VFC<Props> = ({ runStartAnimation }) => (
  <Wrapper runStartAnimation={runStartAnimation}>
    <SidewaysLines
      animation="slideFadein"
      pattern="rightCenterLeft"
      animationDelayMs={sidewayBaseDelay + 400}
      width="25%"
    />
    <SidewaysLines
      animation="slideFadein"
      pattern="leftRightCenter"
      animationDelayMs={sidewayBaseDelay}
      width="25%"
    />
    <SidewaysLines
      animation="slideFadein"
      pattern="centerLeftRight"
      animationDelayMs={sidewayBaseDelay + 200}
      width="25%"
    />
  </Wrapper>
);

export default NavBarSidewaysLines;
