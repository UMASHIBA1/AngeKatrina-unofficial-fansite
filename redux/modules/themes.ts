import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themes",
  initialState: "light",
  reducers: {
    toDark: () => "dark",
    toLight: () => "light",
  },
});

export const { toDark, toLight } = themeSlice.actions; //actions

export default themeSlice.reducer; //reducer
