import { useEffect, useState } from "react";
import { FaShoppingCart, FaSearch } from 'react-icons/fa';


export default function OnSale({ product }){

  const [sPrice, setSPrice] = useState('');
  const { title, price, images } = product;

  useEffect(() => {
    let salePrice = price - (price * .50);
    setSPrice(salePrice);
  })

  return (
    <div className="col products">
      <div className="card individualProduct" style={{width: "18rem"}}>
        <img src={images} alt={`${title}`} className="card-img-top" />
        <div className="sale-card-body">
          <h1 className="onSale">FLASH SALE</h1>
          <h2 className="card-title">{title}</h2>
          <p className='card-text'>WAS ${price.toFixed(2)} NOW ${sPrice.toFixed(2)} USD</p>
          <div className='cartAndSearch'>
          <div className='btn card-link cart2'>
            <FaSearch />
          </div>
          <div className='btn card-link cart2'>
            <FaShoppingCart />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}