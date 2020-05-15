import React from "react";
import MostIn from "../../../public/start_animation/svgs/most_in.svg";
import SecondIn from "../../../public/start_animation/svgs/second_in.svg";
import ThirdIn from "../../../public/start_animation/svgs/third_in.svg";
import FourthIn from "../../../public/start_animation/svgs/fourth_in.svg";
import styled from "styled-components";
import SingleMagicCircle from "../../atomics/start_animation/SingleMagicCircle";
import { ANGE_WHITE } from "../../../constants/colors";

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${ANGE_WHITE};
`;

const MagicCircle: React.FC = () => {
  const mostInDiameter = 350;
  const SecondInDiameter = 550;
  const ThirdInDiameter = 700;
  const FourthInDiameter = 900;

  return (
    <Container>
      <SingleMagicCircle SvgElement={MostIn} Diameter={mostInDiameter} />
      <SingleMagicCircle SvgElement={SecondIn} Diameter={SecondInDiameter} />
      <SingleMagicCircle SvgElement={ThirdIn} Diameter={ThirdInDiameter} />
      <SingleMagicCircle SvgElement={FourthIn} Diameter={FourthInDiameter} />
    </Container>
  );
};

export default MagicCircle;
