import { useEffect, useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

export default function OnSale(props) {
  const { title, price, images } = props.product;
  const { setCart } = props;
  const [showPopup, setShowPopup] = useState(false);
  const sPrice = price - price * 0.5;

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className="col products">
      <div className="card individualProduct" style={{ width: "18rem" }}>
        <img src={images} alt={`${title}`} className="card-img-top" />
        <div className="sale-card-body">
          <h1 className="onSale">FLASH SALE</h1>
          <h2 className="card-title">{title}</h2>
          <p className="card-text">
            WAS ${price.toFixed(2)} NOW ${sPrice.toFixed(2)} USD
          </p>
          <div className="cartAndSearch">
            <div className="btn card-link cart2">
              <FaSearch />
            </div>
            <div
              className="btn card-link cart2"
              onClick={() => addToCart(props.product)}
            >
              <FaShoppingCart />
            </div>
          </div>
          <div>{showPopup && <p>Added to Cart</p>}</div>
        </div>
      </div>
    </div>
  );
}
