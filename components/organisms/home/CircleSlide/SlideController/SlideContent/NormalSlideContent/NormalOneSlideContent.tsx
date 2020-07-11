import React from "react";
import styled from "styled-components";

const OneSlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NormalOneSlideContent: React.FC = (props) => {
  return <OneSlideWrapper>{props.children}</OneSlideWrapper>;
};

export default NormalOneSlideContent;
