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
      state.selectedItem.push(action.payload);
      state.counterValue = state.selectedItem.length;
    },
    decrement(state, action: PayloadAction<string>) {
      const itemIndex = state.selectedItem.indexOf(action.payload);
      if (itemIndex !== -1) {
        state.selectedItem = state.selectedItem.slice(0, itemIndex).concat(state.selectedItem.slice(itemIndex + 1));
      }
      state.counterValue = state.selectedItem.length;
    },
    updateTotalPrice(state, action: PayloadAction<number>) {
        state.total = action.payload;
      },
  },
});
export default templateSlice.reducer;
export const { increment, decrement, updateTotalPrice } = templateSlice.actions;
export const selectCounter = (store: RootState) => store.counter.counterValue;
export const selectSelectedItem = (store: RootState): string[] => store.counter.selectedItem;