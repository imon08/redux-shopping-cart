// import { useEffect, useState } from "react";
// import axios from "axios";
import ProductCard from "./ProductCard";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getProducts, getTotalQuantity } from "../slices/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    productName: "trimmer",
    price: 1200,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo_W4j_6CwC91hFbU3sXFEA_XckJWB4RVFSw&usqp=CAU",
  },
  {
    id: 2,
    productName: "veet",
    price: 250,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUziWdquk8HkcpY4YZvUBjMB42sBR9yTXWQ&usqp=CAU",
  },
  {
    id: 3,
    productName: "handcream",
    price: 450,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4-x7MsxYoJJVLc9xeilhLDqBP1XKNuWpIMA&usqp=CAU",
  },
  {
    id: 4,
    productName: "Mug",
    price: 399,
    image: "https://m.media-amazon.com/images/I/71NwoHMYaNL._SL1500_.jpg",
  },
  {
    id: 5,
    productName: "Runing Shoes",
    price: 700,
    image:
      "https://m.media-amazon.com/images/I/71n9xHYpaHL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    id: 6,
    productName: "Hoodie",
    price: 919,
    image: "https://m.media-amazon.com/images/I/71cEE8o1c2L._UX466_.jpg",
  },
];

function Home() {
  // const [data, setData] = useState([]);
  const products = useSelector(getProducts);
  const totalQuantity = useSelector(getTotalQuantity)

  console.log(products);

  // useEffect(() => {
  //   axios.get("http://localhost:4000/data").then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  return (
    <div className="Home m-3 relative">
      <Link to="/cart">
        <div className="absolute top-0 right-2">
          <div className="relative">
            <AiOutlineShoppingCart className="text-4xl" />
            <p className="absolute -top-2 right-4 bg-yellow-400 rounded-full w-6 h-6 flex justify-center">
              {totalQuantity}
            </p>
          </div>
        </div>
      </Link>
      <h1 className="text-center font-bold text-3xl m-5 ">Shopping cart</h1>
      <h3 className="text-left m-3 text-xl font-bold">Items present :</h3>
      <div className="flex flex-wrap gap-5">
        {data.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.productName}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
