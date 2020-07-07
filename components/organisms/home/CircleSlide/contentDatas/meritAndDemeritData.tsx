import { Props as SlideContentProps } from "../SlideContent/SlideContent";
import styled from "styled-components";
import BigSlideText from "../../../../atomics/home/BigSlideText";

const Wrapper = styled.div`
  width: 90%;
  text-align: center;
`;

const FirstPage = () => (
  <Wrapper>
    <BigSlideText color="angeRed">アンジュ・カトリーナ</BigSlideText>
    <BigSlideText color="angeRed">を推すメリットとデメリット</BigSlideText>
  </Wrapper>
);

const meritAndDemeritData: SlideContentProps = {
  animationType: "slide",
  slidePages: [<FirstPage />],
};

export default meritAndDemeritData;
