import styled from "styled-components";
import MagicCircle from "../components/organisms/gatya/MagicCircle/MagicCircle";
import PageWrapper from "../components/templates/PageWrapper";
import SmallMagicCircleMap from "../components/organisms/gatya/SmallMagicCircleMap/SmallMagicCircleMap";
import { ANGE_WHITE } from "../constants/colors";
import BlackTransition from "../components/organisms/gatya/BlackTransition/BlackTransition";
import OmataseMattaText from "../components/organisms/gatya/OmataseMattaText";
import AngeTriangle from "../components/organisms/gatya/AngeTriangle";
import Flash from "../components/organisms/gatya/Flash/Flash";
import ShowAngeCard from "../components/organisms/gatya/ShowAngeCard";
import { GetServerSideProps } from "next";
import getRandomInt from "../systems/getRandomInt";
import AngeCard from "../components/organisms/gatya/AngeCard/AngeCard";

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
