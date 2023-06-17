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
  const [userFilter, setUserFilter] = useState("");
  const [searchProducts, setSearchProducts] = useState("");
  const [productCategories, setProductCategories] = useState(new Set());
  const [productsFiltered, setProductsFiltered] = useState("");

  useEffect(() => {
    if (userSearch) {
      setSearchProducts(
        products.filter((item) => {
          return item.title.toLowerCase().includes(userSearch.toLowerCase());
        })
      );
    }
  }, [userSearch]);

  useEffect(() => {
    if (userFilter) {
      setProductsFiltered(
        products.filter((item) => {
          return item.category.name.includes(userFilter);
        })
      );
    }
  }, [userFilter])

  useEffect(() => {
    const proCats = new Set();
    if (products) {
      products.forEach((product) => {
        const categoryName = product.category.name;
        proCats.add(categoryName);
      });
    }
    setProductCategories(proCats);
  }, [products]);

  useEffect(() => {
    fetch(fetchURL)
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);

  return (
    <BrowserRouter>
      <Banner
        setUserSearch={setUserSearch}
        cart={cart}
        setUserFilter={setUserFilter}
        productCategories={productCategories}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              setCart={setCart}
              userSearch={userSearch}
              products={products}
              searchProducts={searchProducts}
              userFilter={userFilter}
              productsFiltered={productsFiltered}
            />
          }
        >
          </Route>
          <Route
            index
            element={
              <Home
                cart={cart}
                setCart={setCart}
                userSearch={userSearch}
                products={products}
                searchProducts={searchProducts}
                userFilter={userFilter}
                productsFiltered={productsFiltered}
              />
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
