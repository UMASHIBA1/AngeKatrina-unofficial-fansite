import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../constants/colors";
import ThumbnailLink from "../../atomics/info/ThumbnailLink/ThumbnailLink";

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

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 48px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 100px;
  text-align: center;
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
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ThumbnailLink description={link.name} link={link.src}>
        <ThumbnailWrapper>
          <Thumbnail src={thumbnail.imgPath} alt={thumbnail.alt} />
        </ThumbnailWrapper>
      </ThumbnailLink>
    </Wrapper>
  );
};

export default LicenseBlock;
