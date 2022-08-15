import React from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import angeHey from "../../../../public/imgs/gatya/ange-hey.png";
import { scale } from "../../../../styles/commonAnimation";

const Img = styled.img`
  object-fit: contain;
  height: 120%;
  margin-top: 30%;
  transform-origin: center;
  animation: ${scale(1.3)} 200ms ease-out 1200ms 2 alternate both;
`;

const particleDiameter = 80;

const createParticleTransform = (
  particleTotalNum: number,
  particleIndex: number
) => {
  const degree = 360 / particleTotalNum;

  return css`
    transform: rotate(${degree * particleIndex}deg);
  `;
};

const Particle = styled.div<{
  particleTotalNum: number;
  particleIndex: number;
}>`
  position: absolute;
  top: calc(50% - 16px);
  right: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${ANGE_LIVE_BACK_COLOR};
  transform-origin: calc(-${particleDiameter / 2}vh + 16px);
  ${({ particleTotalNum, particleIndex }) =>
    createParticleTransform(particleTotalNum, particleIndex)}
`;

const ParticleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50%;
  transform: translate(-50%, -50%);
  width: ${particleDiameter}vh;
  height: ${particleDiameter}vh;
`;
const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const PARTICLE_NUM = 12;

const AngeImage: React.VFC = () => {
  return (
    <Wrapper>
      <ParticleWrapper>
        {[...Array(PARTICLE_NUM).keys()].map((i) => (
          <Particle particleTotalNum={PARTICLE_NUM} particleIndex={i} />
        ))}
      </ParticleWrapper>
      <Img src={angeHey} alt="アンジュのかわいい立ち絵" />
    </Wrapper>
  );
};

export default AngeImage;
