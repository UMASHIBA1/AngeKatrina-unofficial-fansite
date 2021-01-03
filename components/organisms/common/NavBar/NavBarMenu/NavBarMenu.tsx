import React from "react";
import styled from "styled-components";
import {
  ANGE_LIVE_BACK_COLOR,
  ANGE_WHITE,
} from "../../../../../constants/colors";
import { fadein } from "../../../../../styles/commonAnimation";
import ListRow from "../../../../molecules/common/ListRow/ListRow";

interface ContentDataType {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  hoveredIcon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  mainText: string;
}

interface Props {
  runStartAnimation: boolean;
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
  opacity: 0;
  animation: ${({ runStartAnimation }) =>
      runStartAnimation ? fadein(1) : "none"}
    1ms forwards linear ${baseDelay}ms;
`;

const AnimateListWrapper = styled.li<
  { order: number } & Pick<Props, "runStartAnimation">
>`
  width: 100%;
  line-height: 1;
  opacity: 0;
  animation: ${({ runStartAnimation }) =>
      runStartAnimation ? fadein(1) : "none"}
    200ms ease-in ${({ order }) => order * 80 + baseDelay + 100}ms forwards;
`;

const NavBarMenu: React.FC<Props> = ({
  contentDataList,
  runStartAnimation,
}) => {
  return (
    <Wrapper runStartAnimation={runStartAnimation}>
      {contentDataList.map(({ icon, mainText, hoveredIcon }, i) => {
        return (
          <AnimateListWrapper
            runStartAnimation={runStartAnimation}
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
        );
      })}
    </Wrapper>
  );
};

export default NavBarMenu;
