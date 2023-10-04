import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FilteredProducts from "./pages/FilteredProducts";
import Checkout from "./pages/Checkout";
import NoPage from "./pages/NoPage";
import { UserProvider } from "./assets/helpers/userReducer";

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/E-Commerce-Store/" element={<Home />} />
          <Route path="/FilteredProducts" element={<FilteredProducts />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
