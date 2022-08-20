import { omataseMattaContent } from "./omataseMattaSetting";
import AnimationProps from "../../typing/AnimationProps";

// summmonText
export const summonTextShadowOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms: 0,
};

export const summonTextStripeOrder: AnimationProps = {
  duration_ms: 400,
  delay_ms:
    summonTextShadowOrder.duration_ms + summonTextShadowOrder.delay_ms + 100,
};

export const summonTextToBlackOrder: AnimationProps = {
  duration_ms: 300,
  delay_ms:
    summonTextStripeOrder.duration_ms + summonTextStripeOrder.delay_ms + 100,
};

// magicCircle
export const magicCircleDropShadowOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms:
    summonTextToBlackOrder.duration_ms + summonTextToBlackOrder.delay_ms + 100,
};

export const magicCircleRemoveDropShadowOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms:
    magicCircleDropShadowOrder.duration_ms +
    magicCircleDropShadowOrder.delay_ms +
    150,
};

export const magicCricleFadeoutOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms:
    magicCircleDropShadowOrder.duration_ms +
    magicCircleDropShadowOrder.delay_ms,
};

export const magicCircleExpandOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms:
    magicCircleRemoveDropShadowOrder.duration_ms +
    magicCircleRemoveDropShadowOrder.delay_ms +
    550,
};

// blackCircle
export const blackCircleExpandOrder: AnimationProps = {
  duration_ms: 600,
  delay_ms:
    magicCircleExpandOrder.duration_ms + magicCircleExpandOrder.delay_ms + 300,
};

// angeTriangle
export const angeTriangleFadeinOrder: AnimationProps = {
  duration_ms: 600,
  delay_ms:
    blackCircleExpandOrder.duration_ms + blackCircleExpandOrder.delay_ms,
};

export const angeTriangleDropShadowOrder: AnimationProps = {
  duration_ms: 600,
  delay_ms:
    blackCircleExpandOrder.duration_ms + blackCircleExpandOrder.delay_ms,
};

export const angeTriangleRemoveDropShadowOrder: AnimationProps = {
  duration_ms: 1000,
  delay_ms:
    angeTriangleDropShadowOrder.duration_ms +
    angeTriangleDropShadowOrder.delay_ms,
};

export const angeTriangleMoveUpOrder: AnimationProps = {
  duration_ms: 800,
  delay_ms:
    angeTriangleRemoveDropShadowOrder.duration_ms +
    angeTriangleRemoveDropShadowOrder.delay_ms +
    100,
};

const omataseMattaFadeinDuration_ms = 150;

export const angeTriangleMoveDownOrder: AnimationProps = {
  duration_ms: omataseMattaFadeinDuration_ms * omataseMattaContent.length,
  delay_ms:
    angeTriangleMoveUpOrder.duration_ms +
    angeTriangleMoveUpOrder.delay_ms +
    300,
};

export const angeTriangleUpRotateOrder: AnimationProps = {
  duration_ms: angeTriangleMoveUpOrder.duration_ms,
  delay_ms: angeTriangleMoveUpOrder.delay_ms,
};

export const angeTriangleDownRotateOrder: AnimationProps = {
  duration_ms: angeTriangleMoveDownOrder.duration_ms,
  delay_ms: angeTriangleMoveDownOrder.delay_ms,
};

// omataseMattaText
export const omataseMattaFadeinOrder: AnimationProps = {
  duration_ms: omataseMattaFadeinDuration_ms,
  delay_ms: angeTriangleMoveDownOrder.delay_ms + 100,
};

// flash
export const lineFlashOrder: AnimationProps = {
  duration_ms: 1000,
  delay_ms:
    omataseMattaFadeinOrder.duration_ms * omataseMattaContent.length +
    omataseMattaFadeinOrder.delay_ms +
    300,
};

export const circleFlashOrder: AnimationProps = {
  duration_ms: 1400,
  delay_ms: lineFlashOrder.delay_ms + 200,
};

export const hideScreenCircleFlashOrder: AnimationProps = {
  duration_ms: 500,
  delay_ms: circleFlashOrder.duration_ms + circleFlashOrder.delay_ms,
};

export const disappearHideScreenCircleFlashOrder: AnimationProps = {
  duration_ms: 0,
  delay_ms:
    hideScreenCircleFlashOrder.duration_ms +
    hideScreenCircleFlashOrder.delay_ms +
    200,
};

export const showAngeCardOrder: AnimationProps = {
  duration_ms: 1000,
  delay_ms:
    disappearHideScreenCircleFlashOrder.duration_ms +
    disappearHideScreenCircleFlashOrder.delay_ms,
};

export const appearAngeCardOrder: AnimationProps = {
  duration_ms: 0,
  delay_ms: showAngeCardOrder.delay_ms,
};

export const appearCloseButtonOrder: AnimationProps = {
  duration_ms: 0,
  delay_ms: appearAngeCardOrder.delay_ms + 1000,
};
