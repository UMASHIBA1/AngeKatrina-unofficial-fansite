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
import CloseButton from "../components/atomics/common/CloseButton/CloseButton";
import { useRouter } from "next/dist/client/router";
import { appearCloseButtonOrder } from "../constants/gatya/animation_order";
import { useTypedSelector } from "../redux/store";

const Main = styled.main`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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

const IndexPage = ({ randomInt }: Props) => {
  const router = useRouter();
  const [isStartSummonAnimation] = useTypedSelector((state) => [
    state.isStartSummonAnimation,
  ]);

  return (
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
        {isStartSummonAnimation && (
          <CloseButton
            top="16px"
            left="16px"
            displayAnimationDelay={appearCloseButtonOrder.delay_ms}
            disableAnimationDelay={500}
            runDisplayAnimation={true}
            runCloseAnimation={false}
            onClickFC={() => router.push("/gatya/description")}
            zIndex={110}
          />
        )}
      </Main>
    </PageWrapper>
  );
};

export default IndexPage;
