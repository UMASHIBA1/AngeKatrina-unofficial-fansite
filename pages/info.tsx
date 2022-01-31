import styled from "styled-components";
import Logo from "../components/atomics/common/Logo";
import AngeDescriptionArea from "../components/organisms/info/AngeDescriptionArea/AngeDescriptionArea";
import AngeLinksArea from "../components/organisms/info/AngeLinksArea/AngeLinksArea";
import EmbedContentArea from "../components/organisms/info/EmbedContentArea/EmbedContentArea";
import WhatIsSanbakaArea from "../components/organisms/info/WhatIsSanbakaArea/WhatIsSanbakaArea";
import PageWrapper from "../components/templates/PageWrapper";
import { ANGE_WHITE } from "../constants/colors";
import HamburgerMenu from "../components/atomics/common/HamburgerMenu/HamburgerMenu";
import NavBar from "../components/organisms/common/NavBar/NavBar";
import { useState } from "react";

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

const Info: React.VFC = () => {
  const [isOpenNavBar, changeIsOpenNavBar] = useState(false);

  return (
    <PageWrapper>
      <Wrapper>
        <LogoWrapper>
          <Logo bgColor="red" />
        </LogoWrapper>
        <AngeDescriptionArea />
        <WhatIsSanbakaArea />
        <EmbedContentArea />
        <AngeLinksArea />
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

export default Info;
