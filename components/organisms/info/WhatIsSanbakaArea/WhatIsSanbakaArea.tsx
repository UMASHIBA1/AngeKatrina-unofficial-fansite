import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import VTuberIconAndName from "../../../molecules/info/VTuberIconAndName/VTuberIconAndName";
import angeImg from "../../../../public/imgs/ange-basic.png";
import inuiImg from "../../../../public/imgs/inui-toko.png";
import rizeImg from "../../../../public/imgs/rize-heruesta.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 120px 0 0 0;
`;

const WhatSanbakaText = styled.h1`
  font-size: 2rem;
  ${BUNKYU_MIDASHI_GO_STD}
  color: ${ANGE_LIVE_BACK_COLOR};
`;

const SanbakaIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 80px 0;

  > div {
    margin: 0 8%;
  }
`;

const SanbakaDescriptionText = styled.p`
  font-size: 1.5rem;
  ${BUNKYU_MIDASHI_GO_STD}
  color: ${ANGE_LIVE_BACK_COLOR};
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
          vtuberName="アンジュカトリーナ"
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
