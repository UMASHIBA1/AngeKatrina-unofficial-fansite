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

interface TextProps {
  text: string;
  fontSize: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const textProps: TextProps[] = [
  { text: "ドコドコドコドコ！", fontSize: "3rem", top: "120px", left: "60vw" },
];

const WaveBG: React.VFC = () => {
  return (
    <Wrapper>
      {textProps.map(({ text, ...props }) => (
        <BGBorderText {...props}>{text}</BGBorderText>
      ))}
    </Wrapper>
  );
};

export default WaveBG;
