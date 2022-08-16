import { createSlice } from "@reduxjs/toolkit";

type animationState = "beforeRun" | "running" | "afterRun";

const startAnimationSlice = createSlice({
  name: "startAnimation",
  initialState: "beforeRun" as animationState,
  reducers: {
    toRunning: () => "running" as animationState,
    toAfterRun: () => "afterRun" as animationState,
  },
});

export const { toRunning, toAfterRun } = startAnimationSlice.actions;

export default startAnimationSlice.reducer;
