import React from "react";
import styled from "styled-components";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { sm_breakpoint } from "../../../../constants/breakpoints";

const Wrapper = styled.div`
	${BUNKYU_MIDASHI_GO_STD}
	color: ${ANGE_LIVE_BACK_COLOR};
  position: absolute;
  left: 10px;
  bottom: 16px;
`;

const AngeTitle = styled.div`
  border-bottom: solid 1px ${ANGE_LIVE_BACK_COLOR};
  @media (max-width: ${sm_breakpoint}px) {
    font-size: 1rem;
  }
`;

const AngeNameMain = styled.div`
  @media (max-width: ${sm_breakpoint}px) {
    font-size: 1.5rem;
  }
`;

const AngeName: React.FC = () => {
  return (
    <Wrapper>
      <AngeTitle>公式美少女錬金術師ライバー？</AngeTitle>
      <AngeNameMain>アンジュ・カトリーナ</AngeNameMain>
    </Wrapper>
  );
};

export default AngeName;
