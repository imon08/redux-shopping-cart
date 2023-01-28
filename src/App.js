import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ProductCard from "./component/ProductCard";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/data").then((res) => {
      setData(res.data);
    });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <h1>Shopping cart</h1>
      <h3>Display shopping cart</h3>
      <div>
        {data.map((item) => {
          return (
            <ProductCard
              key={item.id}
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

export default App;
