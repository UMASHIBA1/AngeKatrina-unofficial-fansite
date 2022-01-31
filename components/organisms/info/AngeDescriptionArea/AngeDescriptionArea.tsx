import React from "react";
import styled from "styled-components";
import { tablet_breakpoint } from "../../../../constants/breakpoints";
import AngeDescription from "./AngeDescription";
import AngeIcon from "./AngeIcon";
import AngeProfile from "./AngeProfile";
import BackGround from "./Background";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;

  @media (min-width: ${tablet_breakpoint}px) {
    height: 100vh;
  }
`;

const Contents = styled.div`
  position: relative;
  top: 0;
  left: 0;
  grid-template-rows: 100vh 1fr 1fr;
  grid-template-columns: 1fr;
  width: 100%;

  @media (min-width: ${tablet_breakpoint}px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, 50%);
    height: 100%;
    padding: 0 5%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding-top: 10%;

  @media (min-width: ${tablet_breakpoint}px) {
    padding-right: 10%;
    justify-content: end;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
    height: auto;
    padding-top: 0;
  }
`;
const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2% 5%;

  @media (min-width: ${tablet_breakpoint}px) {
    align-items: end;
    padding: 0 8% 3%;
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2% 5%;

  @media (min-width: ${tablet_breakpoint}px) {
    align-items: start;
    padding: 0 8%;
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;

const AngeDescriptionArea = () => {
  return (
    <Wrapper>
      <BackGround />
      <Contents>
        <IconWrapper>
          <AngeIcon />
        </IconWrapper>
        <DescriptionWrapper>
          <AngeDescription />
        </DescriptionWrapper>
        <ProfileWrapper>
          <AngeProfile />
        </ProfileWrapper>
      </Contents>
    </Wrapper>
  );
};

export default AngeDescriptionArea;
