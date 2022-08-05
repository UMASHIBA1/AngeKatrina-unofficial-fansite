import React from "react";
import styled from "styled-components";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";
import { translate } from "../../../../styles/commonAnimation";
import BGBorderText from "./BGBorderText";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400%;
  height: 100%;
  animation: ${translate({ x: "100%", y: 0 }, { x: 0, y: 0 })} 3500ms ease-out
    200ms both;

  @media (min-width: ${sm_breakpoint}px) {
    width: 300%;
  }

  @media (min-width: ${tablet_breakpoint}px) {
    width: 200%;
  }
`;

interface TextProps {
  text: string;
  fontSize: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

// TODO: それぞれの文字でスクロール速度を変える
const textProps: TextProps[] = [
  { text: "ドコドコドコドコ！", fontSize: "3.3vw", top: "120px", left: "60vw" },
  { text: "ほにゅ？", fontSize: "4.4vw", top: "240px", left: "40%" },
  {
    text: "やってらんねぇよなぁ！",
    fontSize: "2.2vw",
    top: "120px",
    right: "10%",
  },
  {
    text: "お待たせ、まった？",
    fontSize: "3.3vw",
    bottom: "240px",
    left: "30%",
  },
  { text: "かわいい", fontSize: "2.4vw", bottom: "360px", left: "50%" },
  { text: "へけっ", fontSize: "3.8vw", bottom: "20%", left: "10%" },
  { text: "我、錬金術師ぞ", fontSize: "6.6vw", bottom: "30%", right: "10%" },
  {
    text: "ナイトバタフライ",
    fontSize: "1.5vw",
    bottom: "60%",
    left: "10%",
  },
  { text: "しぬんだぁ", fontSize: "5.5vw", bottom: "40%", left: "15%" },
  { text: "彼氏錬成", fontSize: "6.6vw", bottom: "70%", left: "5%" },
  { text: `ロゴぢゃ･･･`, fontSize: "4.4vw", bottom: "500px", right: "20%" },
  { text: "違うの！", fontSize: "2.2vw", bottom: "12%", right: "35%" },
  { text: "やってやらぁ！", fontSize: "3.3vw", bottom: "50%", right: "0%" },
  { text: "もろて", fontSize: "4.9vw", bottom: "42%", right: "52%" },
  { text: "それはそう", fontSize: "3.3vw", bottom: "70%", right: "40%" },
  { text: "グーやぞ", fontSize: "2.6vw", bottom: "90%", right: "42%" },
];

const WaveBG: React.VFC = () => {
  return (
    <Wrapper>
      {textProps.map(({ text, ...props }) => (
        <BGBorderText key={text} {...props}>
          {text}
        </BGBorderText>
      ))}
    </Wrapper>
  );
};

export default WaveBG;
