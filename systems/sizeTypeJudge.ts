import { SizeType } from "../typing/SizeType";

type ResultType = {
  [k in SizeType]: any;
};

// NOTE styled-components等を扱うにあたりsizeの値によって返す値を
// 変える関数が余りに多いためカリー化した関数を作成した。
const sizeTypeJudge = (size: SizeType) => {
  return (result: ResultType) => {
    return result[size];
  };
};

export default sizeTypeJudge;
