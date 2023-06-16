import { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";

import OnSale from "./OnSale";

export default function CallAPI(props) {
  const { setCart, userSearch } = props;
  // const apis = ['https://fakestoreapi.com/products', 'https://api.escuelajs.co/api/v1/products']

  const [fetchURL, setFetchURL] = useState(
    "https://api.escuelajs.co/api/v1/products"
  );
  const [products, setProducts] = useState([]);
  // const [saleProducts, setSaleProducts] = useState('');

  const [randomNumber, setRandomNumber] = useState(0);

  let searchProducts;

  // useEffect(() => {
  //   fetch(fetchURL)
  //     .then((res) => res.json())
  //     .then((products) => setProducts(products));
  // }, [searchProducts]);

  
  if (userSearch) {
    searchProducts = products.filter((item) => {
      return item.title.toLowerCase().includes(userSearch.toLowerCase());
    });
  }

  return (
    <div className="container">
      <div className="row sale">
        {/* <OnSale product={products[0]} /> */}
      </div>

      
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

      <div className="row gy-5 products">
        {products.map((product) => (
          <DisplayProducts
            product={product}
            key={product.id}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
}
