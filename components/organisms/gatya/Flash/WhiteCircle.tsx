import React from "react";
import WhiteCircleSVG from "../../../../public/gatya/svgs/white_circle.svg";

// NOTE HideScreenCircleFlashとCircleFlashのどちらでも使うためatomicでコンポーネント化しました
interface Props {
  isStartAnimation: boolean;
  scale: number;
  blur: string;
}

const WhiteCircle: React.FC<Props> = ({
  isStartAnimation,
  blur,
  scale,
  ...props
}: Props) => {
  return <WhiteCircleSVG {...props} />;
};

export default WhiteCircle;
