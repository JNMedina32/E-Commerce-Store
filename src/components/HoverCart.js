import { useState, useEffect } from "react";
import './HoverCart.css';

export default function HoverCart(props) {
  const { cart } = props;

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
    <div className="card hoverCard">
      <div className="card-body hoverCardBody">
        <h5 className="card-title hoverCardTitle">Your Cart</h5>
        {cart.length === 0 ? (
          <p className="card-text hoverCardText">Your cart is empty :/</p>
        ) : (
          <div className="col cardCart">
            <h3 className="card-subtitle hoverCardSubtitle">Cart Total: ${cartTotal.toFixed(2)} USD</h3>
            <ul className="list-group hoverCardListGroup">
              {cart.map((item) => (
                <li className="list-group-item hoverCardListGroupItem" key={item.id}>
                  <h6 className="card-subtitle">{item.title}</h6>
                  <p className="card-text hoverCardText">${item.price.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
