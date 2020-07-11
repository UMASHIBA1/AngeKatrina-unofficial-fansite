import { ReactNode } from "react";

interface SlidePageType {
  node: ReactNode;
  key: string | number;
}

interface ContentDataType {
  animationType: "slide" | "splitedSlide";
  slidePages: SlidePageType[];
  animationDuration_ms: number;
}

export default ContentDataType;
