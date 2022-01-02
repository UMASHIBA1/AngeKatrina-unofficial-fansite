import React, { ReactNode, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import useDidMount from "../../../../hooks/useDidMount";

export interface YouTubeEmbedderProps {
  children: ReactNode; // expected width: 100%, height: 100% iframe
}

const videoRatio = 0.5625; //  315 / 560 youtube video ratio

const Wrapper = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
`;

const useYouTubeHeight = () => {
  const [height, changeHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const calcAndChangeHeight = () => {
    ref.current && changeHeight(ref.current.clientWidth * videoRatio);
  };

  useDidMount(() => {
    calcAndChangeHeight();

    ref.current &&
      (function () {
        const iframes = ref.current.getElementsByTagName("iframe");
        iframes[0].setAttribute("width", "100%");
        iframes[0].setAttribute("height", "100%");
      })();
  });

  useEffect(() => {
    window.addEventListener("resize", calcAndChangeHeight);
    return function cleanup() {
      window.removeEventListener("resize", calcAndChangeHeight);
    };
  }, []);

  return [ref, height] as [React.RefObject<HTMLDivElement>, number];
};

const YoutubeEmbedder: React.VFC<YouTubeEmbedderProps> = ({ children }) => {
  const [ref, height] = useYouTubeHeight();

  return (
    <Wrapper ref={ref} height={`${height}px`}>
      {children}
    </Wrapper>
  );
};

export default YoutubeEmbedder;
