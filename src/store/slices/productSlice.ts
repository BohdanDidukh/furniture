import { createSlice } from "@reduxjs/toolkit";

import products from "../../data/data";

const productSlice = createSlice({
  name: "product",
  initialState: {
    filters: [
      { category: "Chairs", position: "0 " },
      { category: "Lamps", position: "25%" },
      { category: "Beds", position: "50%" },
      { category: "Sofa", position: "75%" },
    ],
    activeFilter: "Chairs",
    products: products,
    filteredProducts: products,
  },
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
      state.filteredProducts = state.products.filter(
        (product) => product.category.name === action.payload
      );
    },
  },
});

export const { setActiveFilter } = productSlice.actions;
export default productSlice.reducer;
