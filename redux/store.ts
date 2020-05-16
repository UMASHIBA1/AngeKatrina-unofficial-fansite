import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./modules/themes";
import sizeReducer from "./modules/sizes";

export default configureStore({
  reducer: {
    themes: themeReducer,
    sizes: sizeReducer,
  },
});
