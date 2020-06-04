import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 200;
  width: 100%;
  height: 100%;
`;

const Line = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tile = styled.div<{ width: string; height: string }>`
  diplay: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const ShowAngeCard: React.FC = () => {
  return (
    <Wrapper>
      {[...Array(20).keys()].map((index) => (
        <Line key={index}>
          {[...Array(20).keys()].map((index) => (
            <Tile key={index} width="5vw" height="5vh" />
          ))}
        </Line>
      ))}
    </Wrapper>
  );
};

export default ShowAngeCard;
