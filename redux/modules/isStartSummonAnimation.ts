import { createSlice } from "@reduxjs/toolkit";

const IsStartSummonAnimationSlice = createSlice({
  name: "isStartSummonAnimation",
  initialState: false,
  reducers: {
    toTrue: () => true,
    toFalse: () => false,
  },
});

export const { toTrue, toFalse } = IsStartSummonAnimationSlice.actions;

export default IsStartSummonAnimationSlice.reducer;
