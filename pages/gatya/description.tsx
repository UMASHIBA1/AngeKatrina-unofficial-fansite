import React, { useState } from "react";
import Logo from "../../components/atomics/common/Logo";
import PageWrapper from "../../components/templates/PageWrapper";
import styled from "styled-components";
import { ANGE_WHITE } from "../../constants/colors";
import DescriptionMain from "../../components/organisms/gatya/description/DecriptionMain";
import HamburgerMenu from "../../components/atomics/common/HamburgerMenu/HamburgerMenu";
import NavBar from "../../components/organisms/common/NavBar/NavBar";

const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${ANGE_WHITE};
  padding: 0 8px;
  padding-top: 52px;
`;

const Gatya: React.VFC = () => {
  const [isOpenNavBar, changeIsOpenNavBar] = useState(false);

  return (
    <PageWrapper>
      <Wrapper>
        <LogoWrapper>
          <Logo bgColor="red" />
        </LogoWrapper>
        <DescriptionMain />
        <HamburgerMenu
          onClickFC={() => {
            changeIsOpenNavBar(true);
          }}
        />
        <NavBar
          isOpen={isOpenNavBar}
          onClose={() => {
            changeIsOpenNavBar(false);
          }}
        />
      </Wrapper>
    </PageWrapper>
  );
};

export default Gatya;
