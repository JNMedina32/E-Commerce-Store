import { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";
import OnSale from './OnSale';

export default function CallAPI(props){
  
  const [fetchURL, setFetchURL] = useState('https://fakestoreapi.com/products');
  const [products, setProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState('');

  function onSale(products){
    if(products){
      let randomProduct = Math.floor(Math.random() * products.length);
      return setSaleProducts(products[randomProduct])
    }
  }
  

  useEffect(() => {
    fetch(fetchURL)
      .then(res => res.json())
      .then(products => setProducts(products));

    onSale(products)
  }, [fetchURL]);

  return (
    <>
    <OnSale saleProducts={saleProducts} />
    <div className="row row-cols-2 row-cols-md-4 gy-5 products">
      {products.map(product => <DisplayProducts product={product} key={product.id} />) }
    </div> 
    </>
  )
}