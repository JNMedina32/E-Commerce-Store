import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function DisplayProducts(props) {
  const { title, price, description, images } = props.product;
  const [showPopup, setShowPopup] = useState(false);
  const { setCart } = props;

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
        <img src={images} alt={title} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">${price.toFixed(2)} USD</p>
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
