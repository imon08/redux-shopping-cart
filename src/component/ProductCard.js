import React from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../slices/cartSlice";

const ProductCard = ({ id, name, price, image }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const product = {
      id,
      name,
      price,
      image,
    };
    dispatch(setProducts(product));
  };

  return (
    <div className="border-black border-2 w-fit rounded-lg text-center bg-gray-200 overflow-hidden">
      <div>
        <img className="w-48 h-52 object-cover" src={image} alt={name} />
      </div>
      <span className="flex ">
        <p className="ml-2">Product:</p>
        <p className="ml-1 font-bold">{name}</p>
      </span>
      <span className="flex mb-2">
        <p className="ml-2">Price:</p>
        <p className="ml-1 font-bold">{price}</p>
      </span>
      <button
        className="bg-yellow-400 m-2 rounded-md py-1 px-3 active:scale-95"
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
