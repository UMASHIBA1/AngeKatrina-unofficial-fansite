import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CSR: React.VFC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default CSR;
