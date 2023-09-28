import { useUser } from "./userReducer";

export default function LoggedInMenu() {
  const { state, dispatch } = useUser();
  const { cart } = state;

  return (
    <section className="container loggedMenu">
      <div className="row">
        <div className="col">
          <h3>My Account</h3>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Your Cart:</h4>
          {cart.length === 0 ? (
            <p>Is Empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => dispatch({ type: "LOGOUT" })}
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}
