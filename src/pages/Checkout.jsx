import { useUser } from "../assets/helpers/userReducer";
import "../assets/styles/Checkout.css";
import { useCart } from "../assets/helpers/useCart";
import { useState } from "react";
import Modal from "../components/Modal";

export default function Checkout() {
  const { groupedCart, totalPrice, addToCart, removeFromCart } = useCart();
  const { dispatch } = useUser();
  const mockSavedData = {
    firstName: "Barry",
    lastName: "Allen",
    email: "2Fast@starlabs.comic",
    address: "123 Star Labs Dr.",
    city: "Central City",
    state: "Missouri",
    zip: "12345",
  };
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData(initialFormData);
    dispatch({ type: "CLEAR_CART" });
  };

  const autoComplete = () => {
    setFormData(mockSavedData);
  };

  return (
    <div className="checkoutSection container">
      <h2 className="row">Checkout</h2>
      <ul className="list-group row coList">
        {Object.values(groupedCart).map((item, index) => (
          <li className="list-group-item coListItem col" key={index}>
            {item.name} <br /> {item.salePrice ? item.salePrice : item.price}{" "}
            <br /> ( x {item.quantity})
            <div className="coAddRemove">
              <button onClick={() => addToCart(item)}>+</button>
              <button onClick={() => removeFromCart(item)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="row">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
      <hr />
      <div className="row">
        <button className="btn btn-primary" onClick={autoComplete}>
          Auto-Fill using saved data
        </button>
      </div>
      <div className="row">
        <form onSubmit={handleSubmit} className="mockForm">
          <div className="row">
            <div className="col">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label htmlFor="city">City</label>
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                id="state"
                className="form-control"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="col">
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                name="zip"
                id="zip"
                className="form-control"
                value={formData.zip}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      {showModal && (
        <Modal
          title="Thank you for your purchase!"
          text="Your order will be shipped to the address provided."
          onClose={() => setShowModal(false)}
          checkout={true}
        />
      )}
    </div>
  );
}
