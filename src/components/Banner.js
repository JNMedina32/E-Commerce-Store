import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.jpg";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import HoverCart from "./HoverCart";
import FilterProducts from "./FilterProducts";

export default function Banner(props) {
  const { setUserSearch, cart } = props;
  const [userInput, setUserInput] = useState("");
  const [isCartHovered, setIsCartHovered] = useState(false);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSearch = () => {
    setUserSearch(userInput);
    setUserInput("");
  };

  const toggleCart = () => {
    setIsCartHovered(!isCartHovered);
  };

  return (
    <nav className="navbar sticky-top">
      <div className="container banner">
        <div className="main">
          <Link to="/">
            <img
              src={Logo}
              width="100"
              height="100"
              className="d-inline-block align-text-top logo"
            />
          </Link>
          <h1 className="col storeName">Phoenix Shopping</h1>

          <div className="col input-group input-group-sm">
            <input
              type="text"
              className="form-control userSearch"
              onChange={handleInput}
              placeholder="search products"
              value={userInput}
            />
            <span
              className="btn search input-group-text"
              onClick={handleSearch}
            >
              <FaSearch />
            </span>
          </div>
          <Link to="cart">
            <button
              className="btn btn-lg cart"
              onMouseEnter={toggleCart}
              onMouseLeave={toggleCart}
            >
              <FaShoppingCart />
            </button>
            <br />
            {isCartHovered && <HoverCart cart={cart} />}
          </Link>
          <Link>
            <button className="btn btn-lg user">
              <FaUserAlt />
            </button>
          </Link>
        </div>
        <FilterProducts />
      </div>
    </nav>
  );
}
