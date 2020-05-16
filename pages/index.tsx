import styled from "styled-components";
import MagicCircle from "../components/organisms/start_animation/MagicCircle";
import PageWrapper from "../components/templates/PageWrapper";

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const IndexPage = () => (
  <PageWrapper>
    <Main>
      <MagicCircle />
    </Main>
  </PageWrapper>
);

export default IndexPage;
