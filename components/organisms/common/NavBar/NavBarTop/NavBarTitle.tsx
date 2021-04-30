import React from "react";
import styled, { css } from "styled-components";
import { fadein, fadeout } from "../../../../../styles/commonAnimation";
import H2 from "../../../../atomics/common/H2";

interface Props {
  runStartAnimation: boolean;
  runCloseAnimation: boolean;
  text: string;
  color?: string;
}

const baseDelay = 700;

const Wrapper = styled.div<
  Pick<Props, "runStartAnimation" | "runCloseAnimation">
>`
  margin-left: 16px;
  ${({ runStartAnimation }) =>
    runStartAnimation &&
    css`
      opacity: 0;
      animation: ${fadein(1)} 100ms ease-in ${baseDelay}ms forwards;
    `}

  ${({ runCloseAnimation }) =>
    runCloseAnimation &&
    css`
      opacity: 1;
      animation: ${fadeout} 100ms ease-in 300ms forwards;
    `}
`;

const NavBarTitle: React.FC<Props> = ({
  runStartAnimation,
  runCloseAnimation,
  text,
  color,
}: Props) => {
  return (
    <Wrapper
      runStartAnimation={runStartAnimation}
      runCloseAnimation={runCloseAnimation}
    >
      <H2 text={text} color={color}></H2>
    </Wrapper>
  );
};
export default NavBarTitle;
