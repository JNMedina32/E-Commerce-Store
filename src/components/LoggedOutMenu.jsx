import { useUser } from "../assets/helpers/userReducer";
import { useState } from "react";

export default function LoggedOutMenu() {
  const { dispatch } = useUser();
  const [userInput, setUserInput] = useState({ username: "", password: "" });
  const user = {
    username: "Username",
    password: "Password",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
 
  };

  const handleSubmit = (e) => {
 
    e.preventDefault();
    if (
      userInput.username === user.username &&
      userInput.password === user.password
    ) {
      dispatch({ type: "LOGIN" });
    }
  };

  return (
    <section className="container loggedMenu">
      <div className="row">
        <div className="col">
          <h3>Sign In</h3>
        </div>
      </div>
      <div className="row">
        <p>Use: "Username" & "Password"</p>
      </div>
      <div className="row">
        <form>
          <div className="col">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <div className="row">
            <div className="col">
              <button data-bs-dismiss="offcanvas" type="button" className="loginBtn" onClick={handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
