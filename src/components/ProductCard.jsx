import { biCartPlus, biCartDash } from "../assets/images/icons/bootstrap";
import { useUser } from "../assets/helpers/userReducer";
import { useState } from "react";
import Modal from "./Modal";
import "../assets/styles/ProductCard.css";

export default function ProductCard({ product }) {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useUser();
  const { cart, loggedIn } = state;
  const [tooltipMsg, setTooltipMsg] = useState("");

  const toggleTooltip = (msg) => {
    setTooltipMsg(msg);
    setTimeout(() => setTooltipMsg(""), 2000);
  };

  const addToCart = () => {
    if (loggedIn) {
      dispatch({ type: "ADD_TO_CART", payload: product });
      toggleTooltip("Added to cart!");
    } else {
      setShowModal(true);
    }
  };

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
    toggleTooltip("Removed from cart!");
  };

  return (
    <section
      className={`card productCard ${product.salePrice ? "saleProd" : ""} `}
    >
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text price">
          {product.salePrice ? (
            <>
              <span className="oldPrice">${product.price.toFixed(2)}</span>
              <span className="salePrice">${product.salePrice.toFixed(2)}</span>
            </>
          ) : (
            <>${product.price.toFixed(2)}</>
          )}{" "}
        </p>
        <p className="card-text descr">{product.description}</p>
        <div className={tooltipMsg ? "tooltip active" : "tooltip"}>
          {tooltipMsg}
        </div>
        {cart.find((item) => item.id === product.id) ? (
          <div className="card-footer">
            <button className="btn btn-success cardBtn" onClick={addToCart}>
              {biCartPlus}
            </button>
            <button className="btn btn-danger cardBtn" onClick={removeFromCart}>
              {biCartDash}
            </button>
          </div>
        ) : (
          <div className="card-footer">
            <button className="btn btn-success cardBtn" onClick={addToCart}>
              {biCartPlus}
            </button>
          </div>
        )}
      </div>
      {showModal && (
        <Modal
          title="Login Required"
          text="You must be logged in to add items to your cart."
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
