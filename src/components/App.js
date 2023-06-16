import "../components/App.css";
import Banner from "./Banner";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../pages/Cart";
import NoPage from "../pages/NoPage";
import Home from "../pages/Home";
import useLocalStorage from "../assets/useLocalStorage";


function App() {
  const [cart, setCart, removeFromCart] = useLocalStorage("cart", []);
  const [userSearch, setUserSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [fetchURL, setFetchURL] = useState(
    "https://api.escuelajs.co/api/v1/products"
  );
  // const [filterProducts, setFilterProducts] = useState('')


  let searchProducts;
  if (userSearch) {
    searchProducts = products.filter((item) => {
      return item.title.toLowerCase().includes(userSearch.toLowerCase());
    });
  }

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);


  return (
    <BrowserRouter>
      <Banner setUserSearch={setUserSearch} cart={cart} />
      <Routes>
        <Route
          index
          path="/"
          element={
            <Home cart={cart} setCart={setCart} userSearch={userSearch} products={products} searchProducts={searchProducts} />
          }
        />
        <Route
          path="cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
