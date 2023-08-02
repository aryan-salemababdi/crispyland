import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../stores/store";

export interface TemplateState {
  selectedItem: string[];
  counterValue: number;
  total: number;
  checkout: boolean;
}

const initialState: TemplateState = {
  selectedItem: [],
  counterValue: 0,
  total: 0,
  checkout: false,
};

const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<string>) {
      state.counterValue++;
      state.selectedItem.push(action.payload);
    },
    decrement(state, action: PayloadAction<string>) {
      state.counterValue--;
      state.selectedItem = state.selectedItem.filter((item) => item !== action.payload);
    },
  },
});

export default templateSlice.reducer;

export const { increment, decrement } = templateSlice.actions;

export const selectCounter = (store: RootState) => store.counter.counterValue;
export const selectSelectedItem = (store: RootState): string[] => store.counter.selectedItem;
