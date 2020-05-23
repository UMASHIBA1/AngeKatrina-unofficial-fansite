import { SizeType } from "../typing/SizeType";

// NOTE styled-components等を扱うにあたりsizeの値によって返す値を
// 変える関数が余りに多いためカリー化した関数を作成した。
const sizeTypeJudge = (size: SizeType) => {
  return (smResult: any, tabletResult: any, pcResult: any) => {
    if (size === "sm") {
      return smResult;
    } else if (size === "tablet") {
      return tabletResult;
    } else {
      return pcResult;
    }
  };
};

export default sizeTypeJudge;
