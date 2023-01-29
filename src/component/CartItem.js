import React from "react";
import { useDispatch } from "react-redux";
import { decreaseItem, increaseItem } from "../slices/cartSlice";

const CartItem = ({ id, name, image, price, quantity }) => {
  const dispatch = useDispatch();
  const handleIncrease = () => {
    const product = {
      id,
      name,
      price,
      image,
    };
    dispatch(increaseItem(product));
  };

  const handleDecrease = () => {
    dispatch(decreaseItem(id));
  };

  return (
    <div className="flex w-full h-44 border-black border-2 overflow-hidden rounded-lg">
      <div className="h-44 w-48 ml-3">
        <img className="h-full w-full object-contain" src={image} alt={name} />
      </div>
      <div className="flex flex-col sm:flex-row justify-between w-full p-4">
        <p className="w-[30%]">{name}</p>
        <p>₹{price}</p>
        <div className="flex h-fit w-fit gap-2 border-gray-400 rounded-md border-2 px-2">
          <button className="text-xl" onClick={handleDecrease}>
            -
          </button>
          <p>{quantity}</p>
          <button className="text-xl" onClick={handleIncrease}>
            +
          </button>
        </div>

        <div className="flex items-center h-fit">
          <p className="text-2xl">₹</p>
          <p className="">{price * quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
