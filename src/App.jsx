import "./assets/styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
      <Navbar />
      <div className="App">
        <h1>Hello Vite + React!</h1>
      </div>
    </Router>
  );
}

export default App;
