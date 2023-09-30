import { useUser } from "../assets/helpers/userReducer";
import "../assets/styles/Navbar.css";
import { biSearch } from "../assets/images/icons/bootstrap";
import storeLogo from "../assets/images/navbar/logo3.jpg";
import LoggedOutMenu from "./LoggedOutMenu";
import LoggedInMenu from "./LoggedInMenu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const { state, dispatch } = useUser();
  const { loggedIn } = state;

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
    <section
      className="offcanvas offcanvas-end"
      id="menu"
      tabIndex="-1"
      aria-labelledby="menuLabel"
    >
      <div className="offcanvas-header row">
        <div className="col">
          <h5 className="offcanvas-title" id="menuLabel">
            Menu
          </h5>
        </div>
        <div className="col">
          <img src={storeLogo} alt="store logo" className="logo" />
        </div>
        <div className="col">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="searchDiv  d-inline d-lg-none"
        style={{ color: "var(--main)", width: "100%" }}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchBar"
          name="search"
          onChange={handleChange}
          value={userInput.search}
          style={{
            justifyContent: "center",
            backgroundColor: "var(--main)",
            color: "var(--accent1)",
          }}
        />
        <button
          className={`searchBtn ${userInput.search ? "" : "disabled"}`}
          type="submit"
          disabled={!userInput.search}
          data-bs-dismiss="offcanvas"
          style={{
            justifyContent: "center",
            backgroundColor: "var(--main)",
            color: "var(--accent1)",
          }}
        >
          {biSearch}
        </button>
      </form>
      <div className="offcanvas-body">
        {loggedIn ? <LoggedInMenu /> : <LoggedOutMenu />}
      </div>
    </section>
  );
}
