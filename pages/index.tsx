import styled from "styled-components";
import MagicCircle from "../components/organisms/start_animation/MagicCircle";
import PageWrapper from "../components/templates/PageWrapper";
import SmallMagicCircleMap from "../components/organisms/start_animation/SmallMagicCircleMap";

const Main = styled.main`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const IndexPage = () => (
  <PageWrapper>
    <Main>
      <MagicCircle />
      <SmallMagicCircleMap />
    </Main>
  </PageWrapper>
);

export default IndexPage;
