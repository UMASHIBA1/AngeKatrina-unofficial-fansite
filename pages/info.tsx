import styled from "styled-components";
import PageWrapper from "../components/templates/PageWrapper";
import { ANGE_WHITE } from "../constants/colors";

const Wrapper = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-color: ${ANGE_WHITE};
`;

const Info: React.VFC = () => {
  return (
    <PageWrapper>
      <Wrapper></Wrapper>
    </PageWrapper>
  );
};

export default Info;
