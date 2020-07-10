import React, { ReactNode } from "react";
import styled from "styled-components";
// import { AnimationTimeProps } from "./SlideContent";
import OneSlideContent from "./OneSlideContent";

interface Props {
  // slideNum: number;
  children: ReactNode;
  // animationTimeProps: AnimationTimeProps;
  // onSlideEndFC?: (event: React.AnimationEvent<HTMLDivElement>) => void;
}

const SplitedSlideWrapperMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const clipPathPropList = [
  "0 0, 100% 0, 100% 20%, 0 20%",
  "0 20%, 100% 20%, 100% 40%, 0 40%",
  "0 40%, 100% 40%, 100% 60%, 0 60%",
  "0 60%, 100% 60%, 100% 80%, 0 80%",
  "0 80%, 100% 80%, 100% 100%, 0 100%",
];

const SplitedSlideOneLine = styled.div<{ index: 0 | 1 | 2 | 3 | 4 }>`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: absolute;
  clip-path: polygon(${({ index }) => clipPathPropList[index]});
`;
const SplitedSlideWrapper: React.FC<Props> = ({ children }: Props) => {
  return (
    <SplitedSlideWrapperMain>
      {[0, 1, 2, 3, 4].map((index) => (
        <SplitedSlideOneLine index={index as 0 | 1 | 2 | 3 | 4} key={index}>
          {children}
        </SplitedSlideOneLine>
      ))}
    </SplitedSlideWrapperMain>
  );
};

export default SplitedSlideWrapper;
