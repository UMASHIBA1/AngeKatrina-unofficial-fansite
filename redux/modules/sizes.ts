import { createSlice } from "@reduxjs/toolkit";

type SizeType = "sm" | "tablet" | "pc";

const sizeSlice = createSlice({
  name: "sizes",
  initialState: "sm" as SizeType,
  reducers: {
    toSM: () => "sm" as SizeType,
    toTablet: () => "tablet" as SizeType,
    toPC: () => "pc" as SizeType,
  },
});

export const { toSM, toTablet, toPC } = sizeSlice.actions;

export default sizeSlice.reducer;
