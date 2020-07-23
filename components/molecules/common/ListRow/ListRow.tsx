import React, { useState } from "react";
import styled from "styled-components";
import H2 from "../../../atomics/common/H2";

interface Props {
  mainText: string;
  IconSvg?: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  HoveredSvg?: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  bgColor: string;
  textColor: string;
  cursor?: "default" | "pointer";
  onClickFC?: () => void;
}

const Wrapper = styled.div<{
  bgColor: Props["bgColor"];
  textColor: Props["textColor"];
  cursor: Props["cursor"];
}>`
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  cursor: ${({ cursor }) => cursor};
  :hover {
    background-color: ${({ textColor }) => textColor};
    color: ${({ bgColor }) => bgColor};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 32px;
  margin-left: 24px;
  margin-right: 12px;
`;

const ListRow: React.FC<Props> = ({
  mainText,
  IconSvg,
  HoveredSvg,
  bgColor,
  textColor,
  cursor = "default",
  onClickFC,
}: Props) => {
  const [isHovering, changeIsHovering] = useState(false);
  return (
    <Wrapper
      bgColor={bgColor}
      textColor={textColor}
      onMouseEnter={() => changeIsHovering(true)}
      onMouseLeave={() => changeIsHovering(false)}
      cursor={cursor}
      onClick={onClickFC}
    >
      <IconWrapper>
        {HoveredSvg !== undefined && IconSvg !== undefined ? (
          isHovering ? (
            <HoveredSvg />
          ) : (
            <IconSvg />
          )
        ) : null}
      </IconWrapper>
      <H2 color={isHovering ? bgColor : textColor} text={mainText}></H2>
    </Wrapper>
  );
};

export default ListRow;
