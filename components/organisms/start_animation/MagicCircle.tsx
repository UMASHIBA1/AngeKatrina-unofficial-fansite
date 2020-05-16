import React from "react";
import MostIn from "../../../public/start_animation/svgs/most_in.svg";
import SecondIn from "../../../public/start_animation/svgs/second_in.svg";
import ThirdIn from "../../../public/start_animation/svgs/third_in.svg";
import FourthIn from "../../../public/start_animation/svgs/fourth_in.svg";
import styled from "styled-components";
import SingleMagicCircle from "../../atomics/start_animation/SingleMagicCircle";
import { ANGE_WHITE } from "../../../constants/colors";
import SummonText from "../../atomics/start_animation/SummonText";
import { useTypedSelector } from "../../../redux/store";

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${ANGE_WHITE};
`;

const MagicCircle: React.FC = () => {
  const sizes = useTypedSelector((state) => state.sizes);
  let mostInDiameter;
  let SecondInDiameter;
  let ThirdInDiameter;
  let FourthInDiameter;
  let summonTextDiameter;
  if (sizes === "sm") {
    mostInDiameter = 120;
    SecondInDiameter = 220;
    ThirdInDiameter = 320;
    FourthInDiameter = 420;
    summonTextDiameter = 100;
  } else if (sizes === "tablet") {
    mostInDiameter = 220;
    SecondInDiameter = 350;
    ThirdInDiameter = 450;
    FourthInDiameter = 570;
    summonTextDiameter = 150;
  } else {
    SecondInDiameter = 550;
    ThirdInDiameter = 700;
    FourthInDiameter = 900;
    summonTextDiameter = 280;
    mostInDiameter = 350;
  }

  return (
    <Container>
      <SingleMagicCircle SvgElement={MostIn} Diameter={mostInDiameter} />
      <SingleMagicCircle SvgElement={SecondIn} Diameter={SecondInDiameter} />
      <SingleMagicCircle SvgElement={ThirdIn} Diameter={ThirdInDiameter} />
      <SingleMagicCircle SvgElement={FourthIn} Diameter={FourthInDiameter} />
      <SummonText diameter={summonTextDiameter} />
    </Container>
  );
};

export default MagicCircle;
