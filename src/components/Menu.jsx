import { useUser } from "../assets/helpers/userReducer";
import "../assets/styles/Navbar.css";
import storeLogo from "../assets/images/navbar/logo3.jpg";
import LoggedOutMenu from "./LoggedOutMenu";
import LoggedInMenu from "./LoggedInMenu";



export default function Menu() {
  const { state } = useUser();
  const { loggedIn } = state;


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
      <div className="offcanvas-body">
        {loggedIn ? <LoggedInMenu /> : <LoggedOutMenu />}
      </div>
    </section>
  );
}
