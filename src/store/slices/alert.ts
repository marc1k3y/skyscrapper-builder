import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlertType } from "../../types";

interface AlertIE {
  id: number
  type: AlertType
  text: string
}

interface StateIE {
  alertStack: AlertIE[]
}

const initialState: StateIE = {
  alertStack: []
}

const alertSlice = createSlice({
  name: "alert_slice",
  initialState,
  extraReducers: () => { },
  reducers: {
    pushMessage(state, action: PayloadAction<AlertIE>) {
      state.alertStack.push(action.payload);
    },
    popMessage(state, action: PayloadAction<number>) {
      state.alertStack = state.alertStack.filter((item) => item.id !== action.payload);
    }
  }
});

export const { pushMessage, popMessage } = alertSlice.actions;
export default alertSlice.reducer;