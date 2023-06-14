import { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";
import OnSale from './OnSale';

export default function CallAPI(props){

  const apis = ['https://fakestoreapi.com/products', 'https://api.escuelajs.co/api/v1/products']
  
  const [fetchURL, setFetchURL] = useState('https://api.escuelajs.co/api/v1/products');
  const [products, setProducts] = useState([]);
  const [saleProducts, setSaleProducts] = useState('');

  let randomNumber = Math.floor(Math.random() * products.length);

  useEffect(() => {
    fetch(fetchURL)
      .then(res => res.json())
      .then(products => setProducts(products));    
  }, []);


  return (
    <div className="container">
    <div className="row sale">
      {/* <OnSale product={products[randomNumber]}/> */}
    </div>
    <div className="row gy-5 products">
      {products.map(product => <DisplayProducts product={product} key={product.id} />) }
    </div> 
    </div>
  )
}