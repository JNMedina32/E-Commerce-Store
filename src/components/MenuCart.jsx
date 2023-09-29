import "../assets/styles/MenuCart.css";
import { Link } from "react-router-dom";
import { useCart } from "../assets/helpers/useCart";

export default function MenuCart() {
  const { addToCart, removeFromCart, totalPrice, groupedCart } = useCart();

  return (
    <section className="cartSection">
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {Object.values(groupedCart).map((item, index) => (
              <li className="list-group-item cartItem row" key={index}>
                {item.name} - ${item.price} ( x {item.quantity})
                <div className="addRemove">
                  <button onClick={() => addToCart(item)}>+</button>
                  <button onClick={() => removeFromCart(item)}>-</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p>Total: ${totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Link to="/Checkout">
            <button  data-bs-dismiss="offcanvas" type="button" className="btn btn-primary">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
