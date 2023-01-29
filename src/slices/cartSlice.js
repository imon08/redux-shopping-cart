import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: JSON.parse(localStorage.getItem("products")) || [],
  },
  reducers: {
    setProducts: (state, action) => {
      const updatedProduct = {
        quantity: 1,
        product: action.payload,
      };
      const targetIndex = state.products.findIndex((item) => {
        return action.payload.id === item.product.id;
      });

      if (targetIndex >= 0) {
        state.products[targetIndex] = {
          ...state.products[targetIndex],
          quantity: state.products[targetIndex].quantity + 1,
        };
      } else {
        state.products = [...state.products, updatedProduct];
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts } = cartSlice.actions;

export const getProducts = (state) => state.cart.products;

export const getTotalQuantity = (state) => {
  let totalQuantity = 0;
  state.cart.products?.forEach((item) => {
    totalQuantity += item.quantity;
  });
  return totalQuantity;
};

export const getTotalPrice = (state) => {
  let totalPrice = 0;
  state.cart.products.forEach((item) => {
    totalPrice += item.product.price * item.quantity;
  });
  return totalPrice;
};

export default cartSlice.reducer;
