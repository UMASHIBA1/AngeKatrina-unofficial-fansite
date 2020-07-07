import React from "react";
import styled from "styled-components";
import OneSlideContent from "./OneSlideContent";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const SlideContent: React.FC = () => {
  return (
    <Wrapper>
      <OneSlideContent>
        アンジュカトリーナ を推すメリットをデメリット
      </OneSlideContent>
      <OneSlideContent>
        メリット ・とにかく可愛い ・配信が楽しい ・毎日の生きがいができる
        ・辛い時思い出して元気になれる ・とにかくかわいい
      </OneSlideContent>
      <OneSlideContent>
        デメリット ・骨抜きになってしまう ・配信のない夜がとてもさみしい
        ・恋人がいる人は揉める原因に ・とにかく可愛すぎる
      </OneSlideContent>
    </Wrapper>
  );
};

export default SlideContent;
