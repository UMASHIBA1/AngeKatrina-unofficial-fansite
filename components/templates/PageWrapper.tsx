import React, { ReactNode } from "react";
import { DispatchType } from "../../redux/store";
import { useDispatch } from "react-redux";
import { sm_breakpoint, tablet_breakpoint } from "../../constants/breakpoints";
import { toSM, toTablet, toPC } from "../../redux/modules/sizes";

interface Props {
  children: ReactNode;
}

// 全てのページで必要な処理をまとめてあります。
const PageWrapper: React.FC<Props> = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  if (window.innerWidth < sm_breakpoint) {
    dispatch(toSM());
  } else if (window.innerWidth < tablet_breakpoint) {
    dispatch(toTablet());
  } else {
    dispatch(toPC());
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default PageWrapper;
