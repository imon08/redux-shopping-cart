import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
  },
  reducers: {
    setProducts: (state, action) => {
      let tempProducts = [...state.products];
      const updatedProduct = {
        quantity: 1,
        product: action.payload,
      };
      const targetProduct = tempProducts.find((item) => {
        return action.payload.id === item.product.id;
      });
      if (targetProduct) {
        tempProducts = tempProducts.map((item) => {
          if (action.payload.id === item.product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        state.products = [...tempProducts];
      } else {
        state.products = [...tempProducts, updatedProduct];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = cartSlice.actions;

export const getProducts = (state) => state.cart.products;

export default cartSlice.reducer;
