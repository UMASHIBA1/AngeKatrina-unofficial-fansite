import React from "react";
import styled from "styled-components";
import { fadein } from "../../../../../styles/commonAnimation";
import H2 from "../../../../atomics/common/H2";

const baseDelay = 700;

const Wrapper = styled.div`
  margin-left: 16px;
  opacity: 0;
  animation: ${fadein(1)} 100ms ease-in ${baseDelay}ms forwards;
`;

interface Props {
  text: string;
  color?: string;
}

const NavBarTitle: React.FC<Props> = ({ text, color }: Props) => {
  return (
    <Wrapper>
      <H2 text={text} color={color}></H2>
    </Wrapper>
  );
};
export default NavBarTitle;
