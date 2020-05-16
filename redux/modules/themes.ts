import { createSlice } from "@reduxjs/toolkit";

type ThemeType = "dark" | "light";

const themeSlice = createSlice({
  name: "themes",
  initialState: "light" as ThemeType,
  reducers: {
    toDark: () => "dark" as ThemeType,
    toLight: () => "light" as ThemeType,
  },
});

export const { toDark, toLight } = themeSlice.actions; //actions

export default themeSlice.reducer; //reducer
