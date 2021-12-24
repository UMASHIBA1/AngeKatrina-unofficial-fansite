import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import VTuberIconAndName from "../../../molecules/info/VTuberIconAndName/VTuberIconAndName";
import angeImg from "../../../../public/imgs/ange-basic.png";
import inuiImg from "../../../../public/imgs/inui-toko.png";
import rizeImg from "../../../../public/imgs/rize-heruesta.png";
import {
  sm_breakpoint,
  tablet_breakpoint,
} from "../../../../constants/breakpoints";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 120px 0 0 0;
`;

const WhatSanbakaText = styled.h1`
  font-size: 1.5rem;
  ${BUNKYU_MIDASHI_GO_STD}
  color: ${ANGE_LIVE_BACK_COLOR};
  @media (min-width: ${sm_breakpoint}px) {
    font-size: 2rem;
  }
`;

const SanbakaIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  > div {
    margin: 15% 0;
  }

  @media (min-width: ${sm_breakpoint}px) {
    flex-direction: row;
    margin: 80px 0;
    > div {
      margin: 0 4%;
    }
  }

  @media (min-width: ${tablet_breakpoint}px) {
    > div {
      margin: 0 8%;
    }
  }
`;

const SanbakaDescriptionText = styled.p`
  font-size: 1rem;
  ${BUNKYU_MIDASHI_GO_STD}
  color: ${ANGE_LIVE_BACK_COLOR};

  @media (min-width: ${sm_breakpoint}px) {
    font-size: 1.5rem;
  }
`;

const WhatIsSanbakaArea: React.VFC = () => {
  return (
    <Wrapper>
      <WhatSanbakaText>さんばかとは？</WhatSanbakaText>
      <SanbakaIcons>
        <VTuberIconAndName
          imgPath={rizeImg}
          imgAlt="リゼ画像"
          vtuberName="リゼ・ヘルエスタ"
        />
        <VTuberIconAndName
          imgPath={angeImg}
          imgAlt="アンジュ画像"
          vtuberName="アンジュ・カトリーナ"
        />
        <VTuberIconAndName
          imgPath={inuiImg}
          imgAlt="戌亥画像"
          vtuberName="戌亥とこ"
        />
      </SanbakaIcons>
      <SanbakaDescriptionText>の仲良し同期三人組</SanbakaDescriptionText>
    </Wrapper>
  );
};

export default WhatIsSanbakaArea;
