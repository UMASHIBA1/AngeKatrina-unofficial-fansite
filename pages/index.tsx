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
import { GetServerSideProps } from "next";
import getRandomInt from "../systems/getRandomInt";
import AngeCard from "../components/organisms/start_animation/AngeCard/AngeCard";

const Main = styled.main`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${ANGE_WHITE};
`;

interface Props {
  randomInt: number;
}

// NOTE ランダム値をサーバー側で生成してAngeImgの表示される画像をサーバー、クライアント同じにしてる
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      randomInt: getRandomInt(3),
    },
  };
};

const IndexPage = ({ randomInt }: Props) => (
  <PageWrapper>
    <Main>
      <MagicCircle />
      <SmallMagicCircleMap />
      <BlackTransition />
      <AngeTriangle />
      <OmataseMattaText />
      <Flash />
      <ShowAngeCard />
      <AngeCard randomInt={randomInt} />
    </Main>
  </PageWrapper>
);

export default IndexPage;
