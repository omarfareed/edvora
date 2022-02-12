import { createSlice } from "@reduxjs/toolkit";

const edvoraSlice = createSlice({
  name: "edvora",
  initialState: {
    filterOptions: {
      product_name: undefined,
      state: undefined,
      city: undefined,
    },
    products: [],
  },
  reducers: {
    addFilterOption(state, { payload: { option, value } }) {
      state.filterOptions[option] = value;
    },
    initializeProducts(state, { payload }) {
      state.products = payload;
    },
  },
});

export default edvoraSlice;
export const EdvoraActions = edvoraSlice.actions;
