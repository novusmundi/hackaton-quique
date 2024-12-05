import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Cart from "./components/Cart"; // Nueva página del carrito
import { CartProvider } from "./CartContext"; // Importar el contexto del carrito

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} /> {/* Ruta para el carrito */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
