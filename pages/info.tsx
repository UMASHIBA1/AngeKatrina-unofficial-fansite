import styled from "styled-components";
import Logo from "../components/atomics/common/Logo";
import AngeDescriptionArea from "../components/organisms/info/AngeDescriptionArea/AngeDescriptionArea";
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

const Info: React.VFC = () => {
  return (
    <PageWrapper>
      <Wrapper>
        <LogoWrapper>
          <Logo bgColor="red" />
        </LogoWrapper>
        <AngeDescriptionArea />
      </Wrapper>
    </PageWrapper>
  );
};

export default Info;
