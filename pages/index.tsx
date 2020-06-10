import styled from "styled-components";
import MagicCircle from "../components/organisms/start_animation/MagicCircle/MagicCircle";
import PageWrapper from "../components/templates/PageWrapper";
import SmallMagicCircleMap from "../components/organisms/start_animation/SmallMagicCircleMap/SmallMagicCircleMap";
import { ANGE_WHITE } from "../constants/colors";
import BlackTransition from "../components/organisms/start_animation/BlackTransition/BlackTransition";
import OmataseMattaText from "../components/organisms/start_animation/OmataseMattaText";
import AngeTriangle from "../components/organisms/start_animation/AngeTriangle";
import Flash from "../components/organisms/start_animation/Flash/Flash";
import ShowAngeCard from "../components/organisms/start_animation/ShowAngeCard";

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
      <BlackTransition />
      <AngeTriangle />
      <OmataseMattaText />
      <Flash />
      <ShowAngeCard />
    </Main>
  </PageWrapper>
);

export default IndexPage;
