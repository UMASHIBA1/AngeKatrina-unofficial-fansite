import React from "react";
import styled from "styled-components";
import { translate } from "../../../../styles/commonAnimation";
import BGBorderText from "./BGBorderText";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  animation: ${translate({ x: 0, y: 0 }, { x: "-50%", y: 0 })} 2000ms linear
    200ms both;
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
  { text: "ドコドコドコドコ！", fontSize: "3rem", top: "120px", left: "60vw" },
  { text: "ほにゅ？", fontSize: "4rem", top: "240px", left: "40%" },
  {
    text: "やってらんねぇよなぁ！",
    fontSize: "2rem",
    top: "120px",
    right: "10%",
  },
  {
    text: "お待たせ、まった？",
    fontSize: "3rem",
    bottom: "240px",
    left: "30%",
  },
  { text: "かわいい", fontSize: "2.2rem", bottom: "360px", left: "50%" },
  { text: "へけっ", fontSize: "3.5rem", bottom: "20%", left: "10%" },
  { text: "我、錬金術師ぞ", fontSize: "6rem", bottom: "30%", right: "10%" },
  {
    text: "ナイトバタフライ",
    fontSize: "1.4rem",
    bottom: "60%",
    left: "10%",
  },
  { text: "しぬんだぁ", fontSize: "5rem", bottom: "40%", left: "15%" },
  { text: "彼氏錬成", fontSize: "6rem", bottom: "70%", left: "5%" },
  { text: `ロゴぢゃ･･･`, fontSize: "4rem", bottom: "500px", right: "20%" },
  { text: "違うの！", fontSize: "2rem", bottom: "12%", right: "35%" },
  { text: "やってやらぁ！", fontSize: "3rem", bottom: "50%", right: "0%" },
  { text: "もろて", fontSize: "4.5rem", bottom: "42%", right: "52%" },
  { text: "それはそう", fontSize: "3rem", bottom: "70%", right: "40%" },
  { text: "グーやぞ", fontSize: "2.4rem", bottom: "90%", right: "42%" },
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
