import React from "react";
import styled from "styled-components";
import BGBorderText from "./BGBorderText";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 100%;
`;

const WaveBG: React.VFC = () => {
  return (
    <Wrapper>
      <BGBorderText fontSize="5rem" top="100px" left="100px">
        ドコドコドコドコ！
      </BGBorderText>
    </Wrapper>
  );
};

export default WaveBG;
