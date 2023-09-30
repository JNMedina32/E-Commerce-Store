import { biSearch, biMenu } from "../assets/images/icons/bootstrap.jsx";
import "../assets/styles/Navbar.css";
import storeLogo from "../assets/images/navbar/logo3.jpg";
import { useUser } from "../assets/helpers/userReducer";
import userImg from "../assets/images/navbar/userImg.jpg";
import Menu from "./Menu";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { state, dispatch } = useUser();
  const [userInput, setUserInput] = useState({ search: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleFilter = (filter) => {
    dispatch({ type: "FILTER", payload: filter });
    navigate("/FilteredProducts");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.search) {
      handleFilter(userInput.search);
    }
  };

  useEffect(() => {
    if (userInput.search === "") {
      dispatch({ type: "FILTER", payload: "" });
      navigate("/E-Commerce-Store");
    }
  }, [userInput.search, dispatch]);

  return (
    <section className="navbar sticky-top">
      <div className="container-fluid navContent">
        <Link
          to="/"
          className="navbar-brand navToolTip"
          data-tooltip="Return Home"
        >
          <img src={storeLogo} alt="store logo" className="logo " />
          <p className="storeName">Your Store Name</p>
        </Link>
        <form onSubmit={handleSubmit} className="searchDiv  d-none d-lg-inline">
          <input
            type="text"
            placeholder="Search"
            className="searchBar"
            name="search"
            onChange={handleChange}
            value={userInput.search}
          />
          <button
            className={`searchBtn ${userInput.search ? "" : "disabled"}`}
            type="submit"
            disabled={!userInput.search}
          >
            {biSearch}
          </button>
        </form>
        <div className="menuToggleDiv">
          {state.loggedIn ? (
            <button
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#menu"
              aria-controls="menu"
              className="menuBtn navToolTip"
              data-tooltip="Menu"
            >
              <img src={userImg} alt="user" className="userImg" />
            </button>
          ) : (
            <button
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#menu"
              aria-controls="menu"
              className="menuBtn navToolTip"
              data-tooltip="Menu"
            >
              {biMenu}
            </button>
          )}
        </div>
      </div>
      <Menu />
    </section>
  );
}
