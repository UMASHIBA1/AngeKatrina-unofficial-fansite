import { keyframes } from "styled-components";

const slideAnimation = (slideNum: number) => {
  // NOTE スライドの枚数が変わってもうまくkeyframeの%を調整できるように下の処理で色々やってる
  const props: { percentage: number; x: number }[] = [{ percentage: 0, x: 0 }];

  const basePercentage = 100 / (slideNum * 3 - 1);
  let previousNum = 0;
  for (const num of [...Array(slideNum).keys()]) {
    if (num !== slideNum - 1) {
      const showSlidePercentage = previousNum + basePercentage * 2;
      const x = num * -100;
      props.push({ percentage: showSlidePercentage, x: x });
      previousNum = showSlidePercentage;

      const moveSlidePercentage = previousNum + basePercentage;
      const next_x = (num + 1) * -100;
      props.push({ percentage: moveSlidePercentage, x: next_x });
      previousNum = moveSlidePercentage;
    } else {
      props.push({ percentage: 100, x: num * -100 });
    }
  }

  return keyframes`
		${props.map(({ percentage, x }) => {
      return `
			${percentage}% {
			transform: translate(${x}%, 0);
		  }
			`;
    })}
	  `;
};

export default slideAnimation;
