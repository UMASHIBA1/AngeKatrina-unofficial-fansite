import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../constants/colors";
import PageWrapper from "../components/templates/PageWrapper";
import Logo from "../components/atomics/home/Logo";
import HomeBG from "../components/organisms/home/HomeBG";
import HomeAnge from "../components/organisms/home/HomeAnge/HomeAnge";
import CircleSlide from "../components/organisms/home/CircleSlide/CircleSlide";
import HamburgerMenu from "../components/atomics/common/HamburgerMenu/HamburgerMenu";
import SideBar from "../components/organisms/common/SideBar/SideBar";

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
        <HomeBG>
          <CircleSlide />
          <Logo />
          <HomeAnge />
          <HamburgerMenu />
          <SideBar />
        </HomeBG>
      </Wrapper>
    </PageWrapper>
  );
};

export default Home;
