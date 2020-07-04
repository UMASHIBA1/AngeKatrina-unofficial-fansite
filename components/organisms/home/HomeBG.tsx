import React, { ReactNode } from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../constants/colors";
import {
  homeContentZIndex,
  homeBgZIndex,
} from "../../../constants/home/zindex";
import BGTriangle, {
  Props as BGTriangleProp,
} from "../../atomics/home/BGTriangle";

interface Props {
  children: ReactNode;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;
const BGWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${homeBgZIndex};
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: ${homeContentZIndex};
`;

const HomeBG: React.FC<Props> = (props: Props) => {
  return (
    <Wrapper>
      <BGWrapper>
        <BGTriangle color="white" />
        <BGTriangle color="yellow" top="300px" left="200px" rotate="180deg" />
        <BGTriangle color="ange" top="300px" left="0px" rotate="180deg" />
      </BGWrapper>
      <ContentWrapper>{props.children}</ContentWrapper>
    </Wrapper>
  );
};

export default HomeBG;
