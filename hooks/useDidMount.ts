import { useState, useEffect } from "react";

const useDidMount = (func: () => void) => {
  const [didMountFlag] = useState("flag");
  useEffect(() => {
    func();
  }, [didMountFlag]);
};

export default useDidMount;
