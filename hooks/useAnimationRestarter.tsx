import { useState } from "react";

const useAnimationRestarter = () => {
  const [key, changeKey] = useState(0);

  const restartAnimation = () => {
    changeKey(key + 1);
  };

  return [key, restartAnimation] as [typeof key, typeof restartAnimation];
};

export default useAnimationRestarter;
