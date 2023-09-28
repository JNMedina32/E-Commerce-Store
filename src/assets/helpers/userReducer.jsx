import { createContext, useReducer, useContext } from "react";

const ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  FILTER: "FILTER",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return { ...state, loggedIn: true };
    case ACTIONS.LOGOUT:
      return { ...state, loggedIn: false, cart: [] };
    case ACTIONS.ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ACTIONS.FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

const initialState = {
  loggedIn: false,
  cart: [],
  filter: "",
};

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
