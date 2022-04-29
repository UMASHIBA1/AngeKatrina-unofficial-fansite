import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RedBlackYellow } from "../../../../typing/Color";
import { ANGE_BLACK, ANGE_YELLOW } from "../../../../constants/colors";

const Square = styled.div<{ color: RedBlackYellow }>`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: ${({ color }) => color};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const useSquareColor = () => {
  const [colors, setColors] = useState<
    [RedBlackYellow, RedBlackYellow, RedBlackYellow]
  >([ANGE_BLACK, ANGE_YELLOW, ANGE_YELLOW]);

  useEffect(() => {
    const id = setTimeout(() => {
      setColors([colors[2], colors[0], colors[1]]);
    }, 600);
    return () => clearTimeout(id);
  });

  return colors;
};

const ThreeSquares: React.VFC = () => {
  const [firstColor, secondColor, thirdColor] = useSquareColor();

  return (
    <Wrapper>
      <Square color={firstColor} />
      <Square color={secondColor} />
      <Square color={thirdColor} />
    </Wrapper>
  );
};

export default ThreeSquares;
