import React from "react";
import styled from "styled-components";
import H2 from "../../../../atomics/common/H2";

const Wrapper = styled.div`
  margin-left: 16px;
`;

interface Props {
  text: string;
  color?: string;
}

const SlideBarTitle: React.FC<Props> = ({ text, color }: Props) => {
  return (
    <Wrapper>
      <H2 text={text} color={color}></H2>
    </Wrapper>
  );
};
export default SlideBarTitle;
