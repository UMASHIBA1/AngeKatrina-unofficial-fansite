import styled from "styled-components";
import {
  ANGE_BLACK,
  ANGE_RED,
  ANGE_YELLOW,
} from "../../../../constants/colors";
import Ring from "../../../atomics/common/Ring/Ring";

interface Props {
  runStartAnimation: boolean;
}

const ringBaseDelay = 400;

const Wrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50%;
  height: 50%;
  max-width: 420px;

  > div {
    position: absolute;
    left: auto;
    :first-child {
      top: 0;
      left: 70%;
    }
    :nth-child(2) {
      top: 25%;
      left: 40%;
    }

    :nth-child(3) {
      top: 60%;
      left: 10%;
    }
  }
`;

const NavBarRings: React.VFC<Props> = ({ runStartAnimation }) => {
  return (
    <Wrapper>
      <Ring
        widthHeight={"50px"}
        animation="expand"
        color={ANGE_BLACK}
        runStartAnimation={runStartAnimation}
        animationDelay={ringBaseDelay}
      />
      <Ring
        widthHeight={"100px"}
        animation="expand"
        color={ANGE_YELLOW}
        runStartAnimation={runStartAnimation}
        animationDelay={ringBaseDelay + 200}
      />
      <Ring
        widthHeight={"150px"}
        animation="expand"
        color={ANGE_RED}
        runStartAnimation={runStartAnimation}
        animationDelay={ringBaseDelay + 400}
      />
    </Wrapper>
  );
};

export default NavBarRings;
