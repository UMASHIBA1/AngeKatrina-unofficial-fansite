import React, { ReactNode } from "react";
import styled from "styled-components";
import OneSlideContent from "./OneSlideContent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

interface Props {
  animationType: "slide" | "splitedSlide";
  slidePages: ReactNode[];
}

const SlideContent: React.FC<Props> = ({
  animationType,
  slidePages: oneSlideContests,
}: Props) => {
  if (animationType === "slide") {
    return (
      <Wrapper>
        {oneSlideContests.map((children) => (
          <OneSlideContent>{children}</OneSlideContent>
        ))}
      </Wrapper>
    );
  } else {
    return <React.Fragment />;
  }
};

export default SlideContent;
