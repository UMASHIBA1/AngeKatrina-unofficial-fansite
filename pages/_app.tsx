import { AppProps } from "next/app";
import "../styles/global.scss";
import { Provider } from "react-redux";
import store from "../redux/store";
import dynamic from "next/dynamic";

const CSR = dynamic(() => import("../components/templates/CSR"), {
  ssr: false,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CSR>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CSR>
  );
};

export default MyApp;
