import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./modules/themes";

export default configureStore({
  reducer: {
    themes: themeReducer,
  },
});
