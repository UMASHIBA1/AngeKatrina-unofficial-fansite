import React, { useState } from "react";
import SideBarBG from "./SideBarBG";
import useDidMount from "../../../../hooks/useDidMount";
import CloseButton from "../../../atomics/common/CloseButton/CloseButton";
import SideBarTopBar from "./SideBarTopBar/SideBarTopBar";
import { ANGE_LIVE_BACK_COLOR, ANGE_WHITE } from "../../../../constants/colors";
import SlideBarTitle from "./SideBarTopBar/SideBarTitle";
import SideBarMenu from "./SideBarMenu/SideBarMenu";
import RedHomeIcon from "../../../../public/svgs/common/red-homeIcon.svg";
import RedInfoIcon from "../../../../public/svgs/common/red-infoIcon.svg";
import RedLicenseIcon from "../../../../public/svgs/common/red-licenseIcon.svg";
import RedPresentIcon from "../../../../public/svgs/common/red-presentIcon.svg";
import WhiteHomeIcon from "../../../../public/svgs/common/white-homeIcon.svg";
import WhiteInfoIcon from "../../../../public/svgs/common/white-infoIcon.svg";
import WhiteLicenseIcon from "../../../../public/svgs/common/white-licenseIcon.svg";
import WhitePresentIcon from "../../../../public/svgs/common/white-presentIcon.svg";
import ListRow from "../../../molecules/common/ListRow/ListRow";

interface contentDataType {
  icon: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  hoveredIcon: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
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

const SideBar: React.FC = () => {
  const [isOpenSideBar, changeIsOpenSideBar] = useState(false);

  useDidMount(() => {
    setTimeout(() => {
      changeIsOpenSideBar(true);
    }, 1000);
  });

  return (
    <SideBarBG isOpenSideBar={isOpenSideBar}>
      <SideBarTopBar>
        <SlideBarTitle text="どれにする？" color={ANGE_LIVE_BACK_COLOR} />
        <CloseButton
          onClickFC={() => {
            changeIsOpenSideBar(false);
          }}
          right="10px"
        />
      </SideBarTopBar>
      <SideBarMenu>
        {contentData.map(({ icon, mainText, hoveredIcon }) => {
          return (
            <ListRow
              key={mainText}
              mainText={mainText}
              IconSvg={icon}
              HoveredSvg={hoveredIcon}
              bgColor={ANGE_WHITE}
              textColor={ANGE_LIVE_BACK_COLOR}
              cursor={"pointer"}
            />
          );
        })}
      </SideBarMenu>
    </SideBarBG>
  );
};

export default SideBar;
