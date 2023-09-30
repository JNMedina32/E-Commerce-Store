import { useState, useEffect } from "react";
import { biCartPlus, biCartDash } from "../assets/images/icons/bootstrap";
import { useUser } from "../assets/helpers/userReducer";
import Modal from "../components/Modal";

export const FlashSaleCarousel = ({ flashSaleProducts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isRotating, setIsRotating] = useState(true);
  const { dispatch, state } = useUser();
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

  useEffect(() => {
    let rotationInterval;
    if (isRotating) {
      rotationInterval = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % flashSaleProducts.length
        );
      }, 3000); // Change the rotation interval as needed
    }

    return () => {
      clearInterval(rotationInterval);
    };
  }, [isRotating, flashSaleProducts.length]);

  return (
    <div id="flashCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Add buttons to control the rotation */}
      <button onClick={() => setIsRotating(!isRotating)}>
        {isRotating ? "Stop" : "Start"}
      </button>
      <div className="carousel-inner flashRow">
        {/* Display the current product */}
        {flashSaleProducts.length > 0 && (
          <div className="carousel-item active saleProd">
            <div className="card flashCard">
              <img
                src={flashSaleProducts[currentIndex].image}
                alt={flashSaleProducts[currentIndex].name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  {flashSaleProducts[currentIndex].name}
                </h5>
                <p className="card-text">
                  {flashSaleProducts[currentIndex].description}
                </p>
                <p className="card-text">
                  <span className="oldPrice">
                    Old Price: $
                    {flashSaleProducts[currentIndex].price.toFixed(2)}
                  </span>
                  <br />
                  <span className="salePrice">
                    Sale Price: $
                    {flashSaleProducts[currentIndex].salePrice.toFixed(2)}
                  </span>
                </p>
              </div>
              <div className={tooltipMsg ? "tooltip active" : "tooltip"}>
                {tooltipMsg}
              </div>
              {cart.find((item) => item.id === product.id) ? (
                <div className="card-footer">
                  <button
                    className="btn btn-success cardBtn"
                    onClick={addToCart}
                  >
                    {biCartPlus}
                  </button>
                  <button
                    className="btn btn-danger cardBtn"
                    onClick={removeFromCart}
                  >
                    {biCartDash}
                  </button>
                </div>
              ) : (
                <div className="card-footer">
                  <button
                    className="btn btn-success cardBtn"
                    onClick={addToCart}
                  >
                    {biCartPlus}
                  </button>
                </div>
              )}
            </div>
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
    </div>
  );
};
