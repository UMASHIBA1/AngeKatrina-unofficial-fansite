import styled from "styled-components";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { minimalPCBreakPoint, tabletBreakPointForAngeCard } from "./constants";

const AngeDescriptionMain = styled.div`
	position: absolute;
	left: 5%;
	top: 45%;
	display: none;
	${BUNKYU_MIDASHI_GO_STD}
	color: ${ANGE_LIVE_BACK_COLOR};
	line-height: 1.8;

	@media (min-width: ${tabletBreakPointForAngeCard + 1}px) {
		display: block;
		font-size: 1.5rem;
		letter-spacing: 0.2rem;
	}
	@media (min-width: ${minimalPCBreakPoint + 1}px) {
		font-size: 1.8rem;
		letter-spacing: 0.2rem;
	};
`;

const AngeDescription = () => {
  return (
    <AngeDescriptionMain>
      ボロボロの小屋で時間を忘れて錬金術
      <br />
      の研究に明け暮れている。大人っぽい
      <br />
      女性的な体に憧れており、実は
      <br />
      その研究をしているとか
      <br />
      していないとか。
    </AngeDescriptionMain>
  );
};

export default AngeDescription;
