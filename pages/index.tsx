import styled from "styled-components";
import MagicCircle from "../components/organisms/start_animation/MagicCircle";
import PageWrapper from "../components/templates/PageWrapper";
import SmallMagicCircleMap from "../components/organisms/start_animation/SmallMagicCircleMap";
import { ANGE_WHITE } from "../constants/colors";

const Main = styled.main`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${ANGE_WHITE};
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
