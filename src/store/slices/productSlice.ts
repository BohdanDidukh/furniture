import { createSlice } from "@reduxjs/toolkit";

import products from "../../data/data";
import { Product } from "../../interfaces/Product";

interface ProductState {
  filters: { category: string; position: string }[];
  activeFilter: string;
  products: Product[];
  filteredProducts: Product[];
  searchTerm: string;
  searchResult: Product[];
}

const initialState: ProductState = {
  filters: [
    { category: "Chairs", position: "0 " },
    { category: "Lamps", position: "25%" },
    { category: "Beds", position: "50%" },
    { category: "Sofa", position: "75%" },
  ],
  activeFilter: "Chairs",
  products: products,
  filteredProducts: products.filter(
    (product) => product.category.name === "Chairs"
  ),
  searchTerm: "",
  searchResult: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
      state.filteredProducts = state.products.filter(
        (product) => product.category.name === action.payload
      );
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.searchResult = state.products.filter((product) =>
        product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { setActiveFilter, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
