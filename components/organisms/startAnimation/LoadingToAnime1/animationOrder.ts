import AnimationProps from "../../../../typing/AnimationProps";

const loadingToAnime1Order: { [key: string]: AnimationProps } = {
  squareMoveToRight: {
    duration_ms: 800,
    delay_ms: 300,
  },
  squareMoveToLeft: {
    duration_ms: 300,
    delay_ms: 0,
  },
  squareOpenAnime1: {
    duration_ms: 600,
    delay_ms: 100,
  },
};

Object.freeze(loadingToAnime1Order);

export default loadingToAnime1Order;
