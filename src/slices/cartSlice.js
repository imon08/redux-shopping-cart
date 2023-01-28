import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = cartSlice.actions;

export const getProducts = (state) => state.cart.products;

export default cartSlice.reducer;
