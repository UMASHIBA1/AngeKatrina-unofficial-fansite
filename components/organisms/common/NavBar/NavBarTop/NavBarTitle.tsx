import React from "react";
import styled from "styled-components";
import { fadein } from "../../../../../styles/commonAnimation";
import H2 from "../../../../atomics/common/H2";

interface Props {
  runStartAnimation: boolean;
  text: string;
  color?: string;
}

const baseDelay = 700;

const Wrapper = styled.div<Pick<Props, "runStartAnimation">>`
  margin-left: 16px;
  opacity: 0;
  animation: ${({ runStartAnimation }) =>
      runStartAnimation ? fadein(1) : "none"}
    100ms ease-in ${baseDelay}ms forwards;
`;

const NavBarTitle: React.FC<Props> = ({
  runStartAnimation,
  text,
  color,
}: Props) => {
  return (
    <Wrapper runStartAnimation={runStartAnimation}>
      <H2 text={text} color={color}></H2>
    </Wrapper>
  );
};
export default NavBarTitle;
