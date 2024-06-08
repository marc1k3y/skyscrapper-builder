import { createSlice } from "@reduxjs/toolkit";

interface StateIE {
  realtor: number
  designer: number
  communication: number
}

const initialState: StateIE = {
  realtor: 0,
  designer: 0,
  communication: 0
}

const upgradeSlice = createSlice({
  name: "upgrade_slice",
  initialState,
  extraReducers: () => { },
  reducers: {
    initRealtor(state, action) {
      state.realtor = action.payload;
    },
    initDesigner(state, action) {
      state.designer = action.payload;
    },
    incrRealtor(state) {
      state.realtor += 1;
    },
    incrDesigner(state) {
      state.designer += 1;
    }
  }
});

export const { initRealtor, initDesigner, incrRealtor, incrDesigner } = upgradeSlice.actions;
export default upgradeSlice.reducer;