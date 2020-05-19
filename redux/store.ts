import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./modules/themes";
import sizeReducer from "./modules/sizes";
import soundReducer from "./modules/sounds";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    themes: themeReducer,
    sizes: sizeReducer,
    sounds: soundReducer,
  },
});

export default store;

type RootState = ReturnType<typeof store.getState>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type DispatchType = typeof store.dispatch;
