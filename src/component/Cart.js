import React from "react";
import { useSelector } from "react-redux";
import { getProducts } from "../slices/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const products = useSelector(getProducts);
  return (
    <div>
      <h1 className="flex justify-center font-bold text-3xl m-3">SHOPPING CART</h1>
      <div className="flex flex-col gap-3 m-2 justify-center">
        {products.map((item) => {
          return (
            <CartItem
              key={item.product.id}
              id={item.product.id}
              name={item.product.name}
              image={item.product.image}
              price={item.product.price}
              quantity={item.quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
