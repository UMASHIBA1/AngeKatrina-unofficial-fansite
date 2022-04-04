import React from "react";
import styled, { css } from "styled-components";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../constants/colors";
import { colorChange, translate } from "../../../styles/commonAnimation";
import ThumbnailLink from "../../atomics/info/ThumbnailLink/ThumbnailLink";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const animationDuration = 300;

const animationDelay = 100;
interface Props {
  title: string;
  description: string;
  link: {
    name: string;
    src: string;
  };
  thumbnail: {
    imgPath: string;
    alt: string;
  };
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${ANGE_LIVE_BACK_COLOR};
  padding: 32px;
`;

const Title = styled.h1<{ isStartAnimation: boolean }>`
  position: relative;
  top: 0;
  left: 0;
  font-size: 2rem;
  margin-bottom: 48px;
  overflow: hidden;
  color: ${ANGE_WHITE};
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${colorChange(ANGE_WHITE, ANGE_LIVE_BACK_COLOR)} 0ms
        ease-in-out ${animationDuration / 2 + animationDelay}ms forwards;
    `}
  ::after {
    position: absolute;
    top: 0%;
    left: 100%;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${translate({ x: 0, y: 0 }, { x: "-200%", y: 0 })}
          ${animationDuration}ms ease-in-out ${animationDelay}ms forwards;
      `}
  }
`;

const Description = styled.p<{ isStartAnimation: boolean }>`
  position: relative;
  top: 0;
  left: 0;
  font-size: 1.2rem;
  margin-bottom: 80px;
  text-align: center;
  overflow: hidden;
  color: ${ANGE_WHITE};
  ${({ isStartAnimation }) =>
    isStartAnimation &&
    css`
      animation: ${colorChange(ANGE_WHITE, ANGE_LIVE_BACK_COLOR)} 0ms
        ease-in-out ${animationDuration / 2 + animationDelay}ms forwards;
    `}

  ::after {
    position: absolute;
    top: 0%;
    left: 100%;
    content: "";
    width: 100%;
    height: 100%;
    background-color: ${ANGE_LIVE_BACK_COLOR};
    ${({ isStartAnimation }) =>
      isStartAnimation &&
      css`
        animation: ${translate({ x: 0, y: 0 }, { x: "-200%", y: 0 })}
          ${animationDuration}ms ease-in-out ${animationDelay}ms forwards;
      `}
  }
`;

const Thumbnail = styled.img<{ height?: string; width?: string }>`
  object-fit: contain;
  height: ${({ height }) => height || "60%"};
  width: ${({ width }) => width || "70%"};
  overflow: hidden;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
`;

const LicenseBlock: React.VFC<Props> = ({
  title,
  description,
  link,
  thumbnail,
}) => {
  const [ref, isStartAnimation] = useIntersectionObserver<HTMLHeadingElement>(
    {}
  );

  return (
    <Wrapper>
      <Title ref={ref} isStartAnimation={isStartAnimation}>
        {title}
      </Title>
      <Description isStartAnimation={isStartAnimation}>
        {description}
      </Description>
      <ThumbnailLink description={link.name} link={link.src}>
        <ThumbnailWrapper>
          <Thumbnail src={thumbnail.imgPath} alt={thumbnail.alt} />
        </ThumbnailWrapper>
      </ThumbnailLink>
    </Wrapper>
  );
};

export default LicenseBlock;
