import { createSlice } from "@reduxjs/toolkit";

const IsStartSummonAnimationSlice = createSlice({
  name: "isStartSummonAnimation",
  initialState: false,
  reducers: {
    startSummonAnimation: () => true,
    stopSummonAnimation: () => false,
  },
});

export const {
  startSummonAnimation,
  stopSummonAnimation,
} = IsStartSummonAnimationSlice.actions;

export default IsStartSummonAnimationSlice.reducer;
