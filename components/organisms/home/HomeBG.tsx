import React, { ReactNode } from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../constants/colors";
import {
  homeContentZIndex,
  homeBgZIndex,
} from "../../../constants/home/zindex";
import Triangle, {
  TriangleProps as BGTriangleProp,
} from "../../atomics/common/Triangle/Triangle";
import { useTypedSelector } from "../../../redux/store";
import sizeTypeJudge from "../../../systems/sizeTypeJudge";

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
  overflow: hidden;
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

const smBGTriangleProps: BGTriangleProp[] = [
  {
    color: "yellow",
    width: "80px",
    top: "100px",
    left: "26px",
  },
  {
    color: "white",
    width: "70px",
    rotate: "45deg",
    top: "90px",
    right: "30px",
  },
  {
    color: "ange",
    width: "90px",
    rotate: "40deg",
    bottom: "60px",
    left: "40px",
  },
  {
    color: "yellow",
    width: "45px",
    rotate: "-40deg",
    bottom: "160px",
    right: "40px",
  },
];

const tabletBGTriangleProps: BGTriangleProp[] = [
  {
    color: "white",
    width: "140px",
    rotate: "40deg",
    top: "130px",
    left: "30px",
  },
  {
    color: "yellow",
    width: "110px",
    rotate: "20deg",
    top: "200px",
    right: "40px",
  },
  {
    color: "ange",
    width: "160px",
    rotate: "40deg",
    bottom: "150px",
    left: "40px",
  },
  {
    color: "white",
    width: "70px",
    rotate: "45deg",
    bottom: "300px",
    right: "20px",
  },
  {
    color: "yellow",
    width: "120px",
    rotate: "-20deg",
    bottom: "40px",
    right: "260px",
  },
];

const pcBGTriangleProps: BGTriangleProp[] = [
  {
    color: "ange",
    width: "150px",
    rotate: "40deg",
    top: "140px",
    left: "50px",
  },
  {
    color: "yellow",
    width: "40px",
    rotate: "-20deg",
    top: "100px",
    left: "40%",
  },
  {
    color: "yellow",
    width: "60px",
    rotate: "35deg",
    top: "90px",
    right: "28%",
  },
  {
    color: "white",
    width: "40px",
    rotate: "15deg",
    top: "200px",
    right: "70px",
  },
  {
    color: "white",
    width: "180px",
    rotate: "45deg",
    bottom: "240px",
    left: "50px",
  },
  {
    color: "yellow",
    width: "140px",
    bottom: "30%",
    left: "35%",
  },
  {
    color: "white",
    width: "100px",
    rotate: "50deg",
    top: "40%",
    left: "50%",
  },
  {
    color: "yellow",
    width: "50px",
    rotate: "-20deg",
    bottom: "120px",
    left: "50%",
  },
  {
    color: "yellow",
    width: "120px",
    rotate: "50deg",
    bottom: "40px",
    right: "60px",
  },
];

const HomeBG: React.FC<Props> = (props: Props) => {
  const size = useTypedSelector((state) => state.sizes);

  const triangleProps: BGTriangleProp[] = sizeTypeJudge(size)(
    smBGTriangleProps,
    tabletBGTriangleProps,
    pcBGTriangleProps
  );

  return (
    <Wrapper>
      <BGWrapper>
        {triangleProps.map((triangleProp) => {
          return (
            <Triangle key={JSON.stringify(triangleProp)} {...triangleProp} />
          );
        })}
      </BGWrapper>
      <ContentWrapper>{props.children}</ContentWrapper>
    </Wrapper>
  );
};

export default HomeBG;
