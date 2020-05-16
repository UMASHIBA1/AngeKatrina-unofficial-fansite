import { createSlice } from "@reduxjs/toolkit";

const sizeSlice = createSlice({
  name: "sizes",
  initialState: "sm",
  reducers: {
    toSM: () => "sm",
    toTablet: () => "tablet",
    toPC: () => "pc",
  },
});

export const { toSM, toTablet, toPC } = sizeSlice.actions;

export default sizeSlice.reducer;
