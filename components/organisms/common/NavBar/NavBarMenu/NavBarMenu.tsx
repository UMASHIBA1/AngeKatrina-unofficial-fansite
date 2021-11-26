import React from "react";
import styled, { css } from "styled-components";
import {
  ANGE_LIVE_BACK_COLOR,
  ANGE_WHITE,
} from "../../../../../constants/colors";
import { fadein, fadeout } from "../../../../../styles/commonAnimation";
import ListRow from "../../../../molecules/common/ListRow/ListRow";
import Link from "next/link";

interface ContentDataType {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  hoveredIcon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  mainText: string;
  link: string;
}

interface Props {
  runStartAnimation: boolean;
  runCloseAnimation: boolean;
  contentDataList: ContentDataType[];
}

const baseDelay = 550;

const Wrapper = styled.ul<Pick<Props, "runStartAnimation">>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const AnimateListWrapper = styled.li<
  { order: number } & Pick<Props, "runStartAnimation" | "runCloseAnimation">
>`
  width: 100%;
  line-height: 1;
  ${({ runStartAnimation, order }) =>
    runStartAnimation &&
    css`
      opacity: 0;
      animation: ${fadein(1)} 200ms ease-in ${order * 80 + baseDelay + 100}ms
        forwards;
    `}
  ${({ runCloseAnimation, order }) =>
    runCloseAnimation &&
    css`
      opacity: 1;
      animation: ${fadeout} 200ms ease-in ${order * 80 + 200}ms forwards;
    `}
`;

const NavBarMenu: React.FC<Props> = ({
  contentDataList,
  runStartAnimation,
  runCloseAnimation,
}) => {
  return (
    <Wrapper runStartAnimation={runStartAnimation}>
      {contentDataList.map(({ icon, mainText, hoveredIcon, link }, i) => {
        return (
          <Link href={link}>
            <AnimateListWrapper
              runStartAnimation={runStartAnimation}
              runCloseAnimation={runCloseAnimation}
              order={i}
              key={mainText}
            >
              <ListRow
                mainText={mainText}
                IconSvg={icon}
                HoveredSvg={hoveredIcon}
                bgColor={ANGE_WHITE}
                textColor={ANGE_LIVE_BACK_COLOR}
                cursor={"pointer"}
              />
            </AnimateListWrapper>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default NavBarMenu;
