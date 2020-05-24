// summmonText
export const summonTextShadowOrder = {
  duration: 500,
  delay: 0,
};

// magicCircle
export const magicCircleDropShadowOrder = {
  duration: 500,
  delay: 100,
};

export const magicCircleRemoveDropShadowOrder = {
  duration: 500,
  delay:
    magicCircleDropShadowOrder.duration +
    magicCircleDropShadowOrder.delay +
    150,
};

export const magicCricleFadeoutOrder = {
  duration: 500,
  delay: magicCircleDropShadowOrder.duration + magicCircleDropShadowOrder.delay,
};

export const magicCircleExpandOrder = {
  duration: 500,
  delay:
    magicCircleRemoveDropShadowOrder.duration +
    magicCircleRemoveDropShadowOrder.delay +
    550,
};

// blackCircle
export const blackCircleExpandOrder = {
  duration: 600,
  delay: magicCircleExpandOrder.duration + magicCircleExpandOrder.delay + 500,
};

// angeTriangle
export const angeTriangleFadeinOrder = {
  duration: 600,
  delay: blackCircleExpandOrder.duration + blackCircleExpandOrder.delay,
};

export const angeTriangleDropShadowOrder = {
  duration: 600,
  delay: blackCircleExpandOrder.duration + blackCircleExpandOrder.delay,
};

export const angeTriangleRemoveDropShadowOrder = {
  duration: 1000,
  delay:
    angeTriangleDropShadowOrder.duration + angeTriangleDropShadowOrder.delay,
};

export const angeTriangleUpLocationOrder = {
  duration: 200,
  delay:
    angeTriangleRemoveDropShadowOrder.duration +
    angeTriangleRemoveDropShadowOrder.delay +
    100,
};

// omataseMattaText
export const omataseMattaFadeinOrder = {
  duration: 180,
  delay:
    angeTriangleRemoveDropShadowOrder.duration +
    angeTriangleRemoveDropShadowOrder.delay +
    100,
};
