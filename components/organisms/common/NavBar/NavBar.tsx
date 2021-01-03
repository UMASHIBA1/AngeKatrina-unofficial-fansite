import React from "react";
import styled, { css } from "styled-components";
import ExpandCircle from "./ExpandCircle";
import LinkList from "./LinkList";
import NavBarTop from "./NavBarTop/NavBarTop";
import RedHomeIcon from "../../../../public/svgs/common/red-homeIcon.svg";
import RedInfoIcon from "../../../../public/svgs/common/red-infoIcon.svg";
import RedLicenseIcon from "../../../../public/svgs/common/red-licenseIcon.svg";
import RedPresentIcon from "../../../../public/svgs/common/red-presentIcon.svg";
import WhiteHomeIcon from "../../../../public/svgs/common/white-homeIcon.svg";
import WhiteInfoIcon from "../../../../public/svgs/common/white-infoIcon.svg";
import WhiteLicenseIcon from "../../../../public/svgs/common/white-licenseIcon.svg";
import WhitePresentIcon from "../../../../public/svgs/common/white-presentIcon.svg";
import NavBarMenu from "./NavBarMenu/NavBarMenu";
import ListRow from "../../../molecules/common/ListRow/ListRow";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";

interface contentDataType {
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  hoveredIcon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  mainText: string;
}

const contentData: contentDataType[] = [
  {
    icon: RedHomeIcon,
    hoveredIcon: WhiteHomeIcon,
    mainText: "ホーム",
  },
  {
    icon: RedInfoIcon,
    hoveredIcon: WhiteInfoIcon,
    mainText: "アンジュ情報",
  },
  {
    icon: RedLicenseIcon,
    hoveredIcon: WhiteLicenseIcon,
    mainText: "ライセンス",
  },
  {
    icon: RedPresentIcon,
    hoveredIcon: WhitePresentIcon,
    mainText: "ガチャ",
  },
];

// interface LinkProp {
//   text: string;
//   url: string;
// }

// interface Props {
//   links: LinkProp[];
//   isOpen: boolean;
//   changeIsClose: () => void;
// }

const NavWrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
`;

const NavBar: React.FC = () => {
  return (
    <NavWrapper isOpen={true}>
      <ExpandCircle
        color="red"
        place="topRight"
        isStartAnimation={true}
        animationOrder="first"
      />
      <ExpandCircle
        color="white"
        place="bottomLeft"
        isStartAnimation={true}
        animationOrder="second"
      />
      <NavBarTop />
      <NavBarMenu contentDataList={contentData} />
      {/* <LinkList
        links={[
          {
            text: "にゃーん!",
            url: "exaple.com",
          },
          {
            text: "日本語にゃーん",
            url: "example.com",
          },
          {
            text: "ガチャ",
            url: "example.com",
          },
        ]}
      /> */}
    </NavWrapper>
  );
};

export default NavBar;
