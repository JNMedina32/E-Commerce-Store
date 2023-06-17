import "../components/App.css";
import OnSale from "../components/OnSale";
import DisplayProducts from "../components/DisplayProducts";
import { useState } from "react";

export default function Home(props) {
  const { setCart, products, searchProducts, productsFiltered } = props;

  const [randomNumber, setRandomNumber] = useState(() =>
    Math.floor(Math.random() * products.length)
  );

  return (
    <div className="App">
        {/* {console.log(products)} */}
      <div className="container">
        <div className="row sale">
          {/* <OnSale product={products[randomNumber]} setCart={setCart} /> */}
        </div>
        <br />
        <div className="row gy-4 products">
          {searchProducts &&
            searchProducts.map((product) => (
              <DisplayProducts
                product={product}
                key={product.id}
                setCart={setCart}
              />
            ))}
            {productsFiltered &&
            productsFiltered.map((product) => (
              <DisplayProducts
                product={product}
                key={product.id}
                setCart={setCart}
              />
            ))}
        </div>
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
