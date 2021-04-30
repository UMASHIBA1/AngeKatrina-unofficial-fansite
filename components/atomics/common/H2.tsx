import React from "react";
import styled from "styled-components";
import { TA_F1_BLOCK_LINE } from "../../../constants/cssProps";
import { ANGE_BLACK } from "../../../constants/colors";

interface Props {
  text: string;
  color?: string;
}

const Text = styled.h2<{ color: string }>`
  ${TA_F1_BLOCK_LINE}
  font-size: 24px;
  color: ${({ color }) => color};
`;

const H2: React.FC<Props> = ({ text, color = ANGE_BLACK }: Props) => {
  return <Text color={color}>{text}</Text>;
};

export default H2;
