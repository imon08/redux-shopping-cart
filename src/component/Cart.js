import React from "react";
import { useSelector } from "react-redux";
import { getProducts, getTotalPrice } from "../slices/cartSlice";
import CartItem from "./CartItem";
import { AnimatedList } from "react-animated-list";

const Cart = () => {
  const products = useSelector(getProducts);
  const totalPrice = useSelector(getTotalPrice);
  return (
    <div>
      <h1 className="flex justify-center font-bold text-3xl m-3">
        SHOPPING CART
      </h1>
      <div className="flex flex-col gap-3 m-2 justify-center">
        <AnimatedList animation={"grow"}>
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
        </AnimatedList>
      </div>
      <div className="flex justify-end w-full text-2xl p-4 gap-4">
        <p>Total:</p>
        <p>₹{totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
