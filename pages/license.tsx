import React from "react";
import styled from "styled-components";
import Logo from "../components/atomics/common/Logo";
import LicenseBlock from "../components/organisms/license/LicenseBlock";
import PageWrapper from "../components/templates/PageWrapper";
import { ANGE_WHITE } from "../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../constants/cssProps";
import NijisanjiLogo from "../public/imgs/common/nijisanji-logo.png";
import GitHubLogo from "../public/imgs/common/github-logo.png";
import NavBar from "../components/organisms/common/NavBar/NavBar";
import HamburgerMenu from "../components/atomics/common/HamburgerMenu/HamburgerMenu";
import { useState } from "react";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${ANGE_WHITE};
  ${BUNKYU_MIDASHI_GO_STD}
  padding-bottom: 120px;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const ContentWrapper = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  gap: 120px;
`;

const License: React.VFC = () => {
  const [isOpenNavBar, changeIsOpenNavBar] = useState(false);

  return (
    <PageWrapper>
      <Wrapper>
        <LogoWrapper>
          <Logo bgColor="red" />
        </LogoWrapper>
        <ContentWrapper>
          <LicenseBlock
            title="ANYCOLOR二次創作ガイドライン"
            description="この非公式ファンサイトは以下のANYCOLOR二次創作ガイドラインを従い作成させていただきました。二次創作を許可していただきありがとうございます。"
            link={{
              name: "ガイドライン",
              src: "https://event.nijisanji.app/guidelines/",
            }}
            thumbnail={{
              imgPath: NijisanjiLogo,
              alt: "にじさんじロゴ",
            }}
          />
          <LicenseBlock
            title="GitHub"
            description="この非公式ファンサイトを構成しているソースコードはGitHubにて公開しております。今後ファンサイトを作る方がいましたら参考までに..."
            link={{
              name: "GitHub",
              src:
                "https://github.com/UMASHIBA1/AngeKatrina-unofficial-fansite",
            }}
            thumbnail={{
              imgPath: GitHubLogo,
              alt: "GitHubロゴ",
            }}
          />
        </ContentWrapper>
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

export default License;
