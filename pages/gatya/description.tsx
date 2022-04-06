import React from "react";
import Logo from "../../components/atomics/common/Logo";
import PageWrapper from "../../components/templates/PageWrapper";
import styled from "styled-components";
import { ANGE_WHITE } from "../../constants/colors";

const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${ANGE_WHITE};
`;

const Gatya: React.VFC = () => {
  return (
    <PageWrapper>
      <Wrapper>
        <LogoWrapper>
          <Logo bgColor="white" />
        </LogoWrapper>
      </Wrapper>
    </PageWrapper>
  );
};

export default Gatya;
