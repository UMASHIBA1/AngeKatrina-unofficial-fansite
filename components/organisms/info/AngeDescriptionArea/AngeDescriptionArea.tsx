import React from "react";
import styled from "styled-components";
import AngeDescription from "./AngeDescription";
import AngeIcon from "./AngeIcon";
import AngeProfile from "./AngeProfile";
import BackGround from "./Background";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Contents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  width: 100%;
  height: 100%;
  padding: 0 5%;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 10%;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 2;
`;
const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 0 8% 3%;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-column-start: 2;
  grid-column-end: 3;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 0 8%;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
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
