import { biSearch } from "../assets/images/icons/bootstrap.jsx";
import "../assets/styles/Navbar.css";
import storeLogo from "../assets/images/navbar/logo3.jpg";
import { useUser } from "../assets/helpers/userReducer";
import userImg from "../assets/images/navbar/userImg.jpg";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { state } = useUser();

  return (
    <section className="navbar sticky-top">
      <div className="container-fluid navContent">
        <Link to="#home" className="navbar-brand">
          <img src={storeLogo} alt="store logo" className="logo" />
          Your Store Name
        </Link>
        <form className="searchDiv">
          <input type="text" placeholder="Search" className="searchBar" />
          <button className="searchBtn">{biSearch}</button>
        </form>
        <button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#menu"
          aria-controls="menu"
          className="menuBtn"
        >
          {state.loggedIn ? (
            <img src={userImg} alt="user" className="userImg" />
          ) : (
            "Login"
          )}
        </button>
      </div>
      <Menu />
    </section>
  );
}
