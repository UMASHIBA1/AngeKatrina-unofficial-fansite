import AnimationProps from "../../../../typing/AnimationProps";

export const squareMoveToRight: AnimationProps = {
  duration_ms: 800,
  delay_ms: 300,
};

export const squareMoveToLeft: AnimationProps = {
  duration_ms: 300,
  delay_ms: 0,
};

export const powerWave: AnimationProps = {
  duration_ms: 400,
  delay_ms:
    squareMoveToRight.delay_ms +
    squareMoveToRight.duration_ms +
    squareMoveToLeft.delay_ms,
};

export const squareOpenAnime1: AnimationProps = {
  duration_ms: 600,
  delay_ms: 100,
};
export const backgroundAnimation: AnimationProps = {
  duration_ms: squareOpenAnime1.duration_ms,
  delay_ms:
    squareMoveToRight.duration_ms +
    squareMoveToRight.delay_ms +
    squareMoveToLeft.duration_ms +
    squareMoveToLeft.delay_ms +
    squareOpenAnime1.delay_ms +
    100,
};
