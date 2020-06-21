import styled from "styled-components";
import { sm_breakpoint } from "../../../../constants/breakpoints";
import { tabletBreakPointForAngeCard } from "./constants";

const WhiteBG = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: #ffffff;
  @media (max-width: ${sm_breakpoint}px) {
    height: 300px;
    clip-path: polygon(0 0, 100% 100%, 100% 100%, 0 100%);
  }

  @media (min-width: ${sm_breakpoint + 1}px) {
    height: 450px;
    clip-path: polygon(0 0, 100% 100%, 100% 100%, 0 100%);
  }

  @media (min-width: ${tabletBreakPointForAngeCard + 1}px) {
    height: 100%;
    clip-path: polygon(0 0, 50% 0, 35% 100%, 0 100%);
  }
`;

export default WhiteBG;
