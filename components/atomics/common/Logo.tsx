import React from "react";
import LogoImg from "../../../public/svgs/home/logo.svg";
import styled, { css } from "styled-components";
import { sm_breakpoint } from "../../../constants/breakpoints";
import { ANGE_LIVE_BACK_COLOR } from "../../../constants/colors";

const common = css`
  position: relative;
  top: 10px;
  left: 10px;
  width: 150px;
  max-height: 100px;
  @media (min-width: ${sm_breakpoint}px) {
    width: 300px;
  }
`;

const TransparentBG = styled.div`
  ${common}
`;

const RedBG = styled.div`
  ${common}
  background-color: ${ANGE_LIVE_BACK_COLOR};
  border-radius: 8px;
  padding: 8px;
`;

interface Props {
  bgColor: "red" | "transparent";
}

const Logo: React.VFC<Props> = ({ bgColor = "transparent" }) => {
  if (bgColor === "transparent") {
    return (
      <TransparentBG>
        <LogoImg />
      </TransparentBG>
    );
  } else {
    return (
      <RedBG>
        <LogoImg />
      </RedBG>
    );
  }
};

export default Logo;
