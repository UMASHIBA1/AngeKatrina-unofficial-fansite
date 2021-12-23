import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../constants/cssProps";
import commentMarkPath from "../../../public/imgs/info/comment-mark.png";

const Wrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 40%;
  width: 50%;
  max-width: 760px;
  color: ${ANGE_LIVE_BACK_COLOR};
  ${BUNKYU_MIDASHI_GO_STD}
`;

const CommentMark = styled.img.attrs({
  src: commentMarkPath,
  alt: "コメントマーク",
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 7% 7% 0 15%;
`;

const Title = styled.h1`
  font-size: 2rem;
  padding: 0 0 10px 0;
  border: solid ${ANGE_LIVE_BACK_COLOR};
  border-width: 0 0 2px 0;
`;

const Description = styled.p`
  font-size: 1.3rem;
  padding: 16px 0 0 0;
  line-height: 2.6rem;
`;

const AngeDescription = () => {
  return (
    <Wrapper>
      <CommentMark />
      <TextWrapper>
        <Title>アンジュ・カトリーナ</Title>
        <Description>
          ボロボロの小屋で時間を忘れて錬金術の研究に明け暮れている。大人っぽい女性的な体に憧れており、実はその研究をしているとかしていないとか。
        </Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default AngeDescription;
