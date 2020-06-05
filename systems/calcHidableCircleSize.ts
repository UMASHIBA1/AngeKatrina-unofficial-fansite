import { SizeType } from "../typing/SizeType";
import { sm_breakpoint, tablet_breakpoint } from "../constants/breakpoints";

export default (size: SizeType) => {
  if (size === "sm") {
    return (sm_breakpoint / 100) * 1.5;
  } else if (size === "tablet") {
    return (tablet_breakpoint / 100) * 1.5;
  } else {
    // NOTE 画面サイズ1920までの対応なので 1920px / 100px * 1.5(大体ルート2) = 大体29
    return 29;
  }
};
