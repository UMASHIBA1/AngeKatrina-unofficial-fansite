import { createSlice } from "@reduxjs/toolkit";

type OnOff = "on" | "off";

const SoundSlice = createSlice({
  name: "sounds",
  initialState: "on" as OnOff,
  reducers: {
    soundOff: () => "off" as OnOff,
    soundOn: () => "on" as OnOff,
  },
});

export const { soundOn, soundOff } = SoundSlice.actions;

export default SoundSlice.reducer;
