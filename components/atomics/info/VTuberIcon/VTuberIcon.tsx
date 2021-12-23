import React from "react";
import styled from "styled-components";
import { ANGE_LIVE_BACK_COLOR } from "../../../../constants/colors";

export interface VTuberIconProps {
  imgPath: string;
  imgAlt: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 200px;
  height: 200px;
  border: 2px ${ANGE_LIVE_BACK_COLOR} solid;
  border-radius: 50%;
  overflow: hidden;
`;

const VTuberImg = styled.img`
  width: 80%;
  margin-top: 10%;
`;

const VTuberIcon: React.VFC<VTuberIconProps> = ({ imgAlt, imgPath }) => {
  return (
    <Wrapper>
      <VTuberImg src={imgPath} alt={imgAlt} />
    </Wrapper>
  );
};

export default VTuberIcon;
