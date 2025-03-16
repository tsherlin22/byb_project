import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import TotalPrice from "./components/TotalPrice";
import About from "./components/About";
import Home from "./components/Home"; // If you have a Home component
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; // Import your custom CSS file


function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [showTotalPrice, setShowTotalPrice] = useState(false);

  const updateTotalPrice = (price) => {
    setTotalPrice((prevPrice) => prevPrice + price);
    setShowTotalPrice(true); // Show total price after first purchase
  };

  return (
    <Router>
      <NavBar /> 


      {showTotalPrice && <TotalPrice totalPrice={totalPrice} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products updateTotalPrice={updateTotalPrice} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;