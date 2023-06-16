import { useEffect, useState } from "react";


export default function useLocalStorage(key, initValue = []){

  const [cart, setCart] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return [cart, setCart, removeFromCart];
};