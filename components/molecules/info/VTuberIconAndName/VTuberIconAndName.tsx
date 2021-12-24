import React from "react";
import styled from "styled-components";
import { sm_breakpoint } from "../../../../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";
import { BUNKYU_MIDASHI_GO_STD } from "../../../../constants/cssProps";
import VTuberIcon from "../../../atomics/info/VTuberIcon/VTuberIcon";

export interface VTuberIconAndNameProps {
  imgPath: string;
  imgAlt: string;
  vtuberName: string;
}

const Wrappper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VTuberName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  ${BUNKYU_MIDASHI_GO_STD}
  color: ${ANGE_LIVE_BACK_COLOR};
  margin-top: 28px;

  @media (min-width: ${sm_breakpoint}px) {
    font-size: 1.2rem;
  }
`;

const VTuberIconAndName: React.VFC<VTuberIconAndNameProps> = ({
  vtuberName,
  ...props
}) => {
  return (
    <Wrappper>
      <VTuberIcon {...props} />
      <VTuberName>{vtuberName}</VTuberName>
    </Wrappper>
  );
};

export default VTuberIconAndName;
