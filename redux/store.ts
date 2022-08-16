import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./modules/themes";
import sizeReducer from "./modules/sizes";
import soundReducer from "./modules/sounds";
import startAnimationReducer from "./modules/startAnimation";
import isStartSummonAnimationReducer from "./modules/isStartSummonAnimation";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    themes: themeReducer,
    sizes: sizeReducer,
    sounds: soundReducer,
    isStartSummonAnimation: isStartSummonAnimationReducer,
    startAnimation: startAnimationReducer,
  },
});

export default store;

type RootState = ReturnType<typeof store.getState>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type DispatchType = typeof store.dispatch;
