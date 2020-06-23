import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../constants/colors";
import PageWrapper from "../components/templates/PageWrapper";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  background-color: ${ANGE_LIVE_BACK_COLOR};
`;

const Home: React.FC = () => {
  return (
    <PageWrapper>
      <Wrapper>
        {/* aaaaa */}
        {/* dad */}
      </Wrapper>
    </PageWrapper>
  );
};

export default Home;
