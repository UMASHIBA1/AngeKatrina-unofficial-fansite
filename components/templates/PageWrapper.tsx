import { useRouter } from "next/dist/client/router";
import React, { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { sm_breakpoint, tablet_breakpoint } from "../../constants/breakpoints";
import useDidMount from "../../hooks/useDidMount";
import { toPC, toSM, toTablet } from "../../redux/modules/sizes";
import { toAfterRun, toRunning } from "../../redux/modules/startAnimation";
import { DispatchType } from "../../redux/store";

interface Props {
  children: ReactNode;
}

const useDispatchSize = (dispatch: DispatchType) => {
  const dispatchNowWindowSize = () => {
    if (window.innerWidth < sm_breakpoint) {
      dispatch(toSM());
    } else if (window.innerWidth < tablet_breakpoint) {
      dispatch(toTablet());
    } else {
      dispatch(toPC());
    }
  };

  useDidMount(() => {
    dispatchNowWindowSize();
    let timer = 0;

    window.addEventListener("resize", () => {
      if (timer > 0) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        dispatchNowWindowSize();
      }, 200);
    });
  });
};

// NOTE 全てのページで必要な処理をまとめてあります。
const PageWrapper: React.FC<Props> = (props: Props) => {
  const dispatch: DispatchType = useDispatch();

  useDispatchSize(dispatch);

  useDidMount(() => {
    console.log(location.pathname);
    if (location.pathname !== "/" && location.pathname !== "/startanimation") {
      dispatch(toAfterRun());
    }
    if (location.pathname === "/startanimation") {
      dispatch(toRunning());
    }
  });

  return <React.Fragment>{props.children}</React.Fragment>;
};

export default PageWrapper;
