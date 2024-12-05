import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Añadiendo producto al carrito:", product); // Log para verificar el producto
    setCart((prevCart) => [...prevCart, product]); // Agrega el producto al estado del carrito
  };

  const removeFromCart = (id) => {
    console.log("Eliminando producto con ID:", id);
    setCart((prevCart) => prevCart.filter((item) => item.objectID !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
