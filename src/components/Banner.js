import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2.jpg";
import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import HoverCart from "./HoverCart";
import FilterProducts from "./FilterProducts";

export default function Banner(props) {
  const { setUserSearch, cart, setUserFilter, productCategories } = props;
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
    <nav className="container-fluid navbar sticky-top">
      <div className="row banner">
        <span className="col bird">
          <Link to="/">
            <img src={Logo} width="100" height="100" className="logo" alt="logo"/>
          </Link>
        </span>
        <h1 className="col storeName">Phoenix Shopping</h1>

        <div className="col input-group input-group-sm">
          <input
            type="text"
            className="form-control userSearch"
            onChange={handleInput}
            placeholder="search products"
            value={userInput}
          />
          <span className="btn search input-group-text" onClick={handleSearch}>
            <FaSearch />
          </span>
        </div>
        <span className="col link">
          <Link to="/cart">
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
        </span>
        <span className="col link">
          <Link to="*">
            <button className="col btn btn-lg user">
              <FaUserAlt />
            </button>
          </Link>
        </span>
      </div>
      <span className="row filter">
        <FilterProducts
          setUserFilter={setUserFilter}
          productCategories={productCategories}
        />
      </span>
    </nav>
  );
}
