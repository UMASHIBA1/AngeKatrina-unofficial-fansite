import React from "react";
import styled, { css } from "styled-components";
import { sm_breakpoint } from "../../../../constants/breakpoints";
import {
  ANGE_LIVE_BACK_COLOR,
  ANGE_WHITE_TRANSLUCENT,
} from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import { fadein, translate } from "../../../../styles/commonAnimation";
import useIntersectionObserver from "../../../../hooks/useIntersectionObserver";

interface AnimationProps {
  isStartAnimation: boolean;
}

const Wrapper = styled.div<AnimationProps>`
  width: 100%;
  padding: 4% 0 10% 8%;
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
  border: 4px solid ${ANGE_LIVE_BACK_COLOR};
  border-radius: 16px;
  background-color: ${ANGE_WHITE_TRANSLUCENT};
  opacity: 0;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${fadein(1)} 600ms ease-in forwards 100ms;
    `}
`;

const TitleWrapper = styled.div<AnimationProps>`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  :before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    width: 100%;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    transform: translate(-100%, 0);
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${translate({ x: "-100%", y: 0 }, { x: "101%", y: 0 })} 400ms
          100ms ease-in-out forwards;
      `}
  }
`;

const Title = styled.h1<AnimationProps>`
  font-size: 1.5rem;
  opacity: 0;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${fadein(1)} 0ms 300ms ease-in-out both;
    `}
  @media (min-width: ${sm_breakpoint}px) {
    font-size: 2rem;
  }
`;

const DescriptionWrapper = styled.div<AnimationProps>`
  display: inline-block;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  padding: 0 0 0 7%;
  margin: 4px 0;
  :before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    height: 100%;
    width: 100%;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${translate({ x: "-100%", y: 0 }, { x: "101%", y: 0 })} 400ms
          100ms ease-in-out both;
      `}
  }
`;

const Description = styled.p<AnimationProps>`
  font-size: 1rem;
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${fadein(1)} 0ms 300ms ease-in-out both;
    `}
  @media (min-width: ${sm_breakpoint}px) {
    font-size: 1.3rem;
    line-height: 3rem;
  }
`;

const AngeProfile = () => {
  const [targetRef, isIntersected] = useIntersectionObserver<HTMLDivElement>(
    {}
  );

  return (
    <Wrapper ref={targetRef} isStartAnimation={isIntersected}>
      <TitleWrapper isStartAnimation={isIntersected}>
        <Title isStartAnimation={isIntersected}>プロフィール</Title>
      </TitleWrapper>
      <br />
      <DescriptionWrapper isStartAnimation={isIntersected}>
        <Description isStartAnimation={isIntersected}>年齢: 26</Description>
      </DescriptionWrapper>
      <br />
      <DescriptionWrapper isStartAnimation={isIntersected}>
        <Description isStartAnimation={isIntersected}>身長: 160cm</Description>
      </DescriptionWrapper>
      <br />
      <DescriptionWrapper isStartAnimation={isIntersected}>
        <Description isStartAnimation={isIntersected}>血液型: O型</Description>
      </DescriptionWrapper>
      <br />
      <DescriptionWrapper isStartAnimation={isIntersected}>
        <Description isStartAnimation={isIntersected}>
          誕生日: 9月30日
        </Description>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default AngeProfile;
