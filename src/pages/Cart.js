import "./Cart.css";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Cart(props) {
  const { cart, removeFromCart } = props;

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    try {
      const totalPrice = cart
        .map((cartItems) => cartItems.price)
        .reduce((acc, price) => acc + price);
      setCartTotal(totalPrice);
    } catch (e) {
      console.log(e);
    }
  }, [cart]);

  return (
    <div className="container cartPage">
      <div className="row">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty :(</p>
        ) : (
          <div className="col cardCart">
            <h3>Cart Total: ${cartTotal.toFixed(2)} USD</h3>
            <ul>
              {cart.map((item) => (
                <li className="card-body" key={item.id}>
                  <img className="card-img-top cardImg" alt={item.title} src={item.images} />
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">${item.price.toFixed(2)}</p>
                  <button
                    className="btn card-link delete"
                    onClick={() => {
                      removeFromCart(item.id);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </li>
              ))}
            </ul>
            <div className="row discount">
              <h4>
                Sign-in to get Discount: ${cartTotal - cartTotal * 0.25} USD
              </h4>
              <button className="btn btn-success cartBtn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
