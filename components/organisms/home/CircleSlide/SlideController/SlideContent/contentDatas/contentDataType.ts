import { Props as SlideContentProps } from "../SlideContent";

type contentDataType = Omit<SlideContentProps, "animationTimeProps"> & {
  animationDuration_ms: number;
};

export default contentDataType;
