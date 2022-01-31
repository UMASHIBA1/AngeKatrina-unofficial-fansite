import React from "react";
import styled from "styled-components";
import Logo from "../components/atomics/common/Logo";
import PageWrapper from "../components/templates/PageWrapper";
import { ANGE_WHITE } from "../constants/colors";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${ANGE_WHITE};
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const License: React.VFC = () => {
  return (
    <PageWrapper>
      <Wrapper>
        <LogoWrapper>
          <Logo bgColor="red" />
        </LogoWrapper>
      </Wrapper>
    </PageWrapper>
  );
};

export default License;
