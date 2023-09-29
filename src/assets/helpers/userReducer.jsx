import { createContext, useReducer, useContext } from "react";

const ACTIONS = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  CLEAR_CART: "CLEAR_CART",
  FILTER: "FILTER",
  SET_MODAL: "SET_MODAL",
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
      const index = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > -1) {
        const newCart = [...state.cart];
        newCart.splice(index, 1);
        return { ...state, cart: newCart };
      }
      return state;
    case ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };
    case ACTIONS.FILTER:
      return { ...state, filter: action.payload };
    case ACTIONS.SET_MODAL:
      return { ...state, welcomeModal: false };
    default:
      return state;
  }
};

const initialState = {
  loggedIn: false,
  cart: [],
  filter: "",
  welcomeModal: true,
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
