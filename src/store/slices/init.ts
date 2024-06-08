import { createSlice } from "@reduxjs/toolkit";
import { LangType } from "../../types";

interface StateIE {
  lang: LangType
  score: number
  pps: number
  ppc: number
}

const initialState: StateIE = {
  lang: "en",
  score: 0,
  pps: 0,
  ppc: 0,
}

const initSlice = createSlice({
  name: "init_slice",
  initialState,
  extraReducers: () => { },
  reducers: {
    initLang(state, action) {
      state.lang = action.payload;
    },
    initScore(state, action) {
      state.score = action.payload;
    },
    initPPC(state, action) {
      state.ppc = action.payload;
    },
    initPPS(state, action) {
      state.pps = action.payload;
    },
  }
});

export const { initLang, initScore, initPPC, initPPS } = initSlice.actions;
export default initSlice.reducer;