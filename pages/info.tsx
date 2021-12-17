import styled from "styled-components";
import Logo from "../components/atomics/common/Logo";
import PageWrapper from "../components/templates/PageWrapper";
import { ANGE_WHITE } from "../constants/colors";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${ANGE_WHITE};
`;

const Info: React.VFC = () => {
  return (
    <PageWrapper>
      <Wrapper>
        <Logo bgColor="red" />
      </Wrapper>
    </PageWrapper>
  );
};

export default Info;
