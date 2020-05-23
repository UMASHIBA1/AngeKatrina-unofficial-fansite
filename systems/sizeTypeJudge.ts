import { SizeType } from "../typing/SizeType";

type ResultType = {
  [k in SizeType]: any;
};

// styled-componentsを扱うにあたりsizeの値によって返す値を変える関数が余りに多いから
// カリー化した関数を作成した。
const sizeTypeJudge = (size: SizeType) => {
  return (result: ResultType) => {
    return result[size];
  };
};

export default sizeTypeJudge;
