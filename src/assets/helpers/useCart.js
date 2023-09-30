import { useUser } from "./userReducer";

export const useCart = () => {
  const {
    state: { cart },
    dispatch,
  } = useUser();

  const cartTotal = (cart) => {
    return cart.reduce((total, item) => {
      if(item.salePrice){
        return (total +  parseFloat(item.salePrice)).toFixed(2);
      } else {
        return (total + parseFloat(item.price));
      }
    }, 0);
  };

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const groupedCart = {};
  cart.forEach((item) => {
    if (groupedCart[item.id]) {
      groupedCart[item.id].quantity += 1;
    } else {
      groupedCart[item.id] = {
        ...item,
        quantity: 1,
      };
    }
  });
  console.log(groupedCart);
  const totalPrice = cartTotal(cart);

  return {
    groupedCart,
    addToCart,
    removeFromCart,
    totalPrice,
  };
};
