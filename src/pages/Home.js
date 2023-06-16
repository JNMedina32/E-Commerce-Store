import "../components/App.css";
import OnSale from "../components/OnSale";
import DisplayProducts from "../components/DisplayProducts";
import { useState } from "react";

export default function Home(props) {
  const { setCart, products, searchProducts } = props;

  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * products.length)
  );

  return (
    <div className="App">
      <div className="container">
        <div className="row sale">
          <OnSale product={products[randomNumber]} setCart={setCart} />
        </div>
        <br />
        {searchProducts &&
          searchProducts.map((product) => (
            <div className="row gy-5 products">
              <DisplayProducts
                product={product}
                key={product.id}
                setCart={setCart}
              />
            </div>
          ))}

        <div className="row gy-4 products">
          {products.map((product) => (
            <DisplayProducts
              product={product}
              key={product.id}
              setCart={setCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
