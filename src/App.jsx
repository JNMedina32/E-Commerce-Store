import "./assets/styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FilteredProducts from "./pages/FilteredProducts";
import Checkout from "./pages/Checkout";
import { UserProvider } from "./assets/helpers/userReducer";

function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FilteredProducts" element={<FilteredProducts />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
