import React, { useEffect, useState } from "react";
import { getCart, removeFromCart, clearCart } from "../utils/cartUtils";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const handleClear = () => {
    clearCart();
    setCart([]);
  };

  if (cart.length === 0) {
    return <div style={styles.emptyCart}>El carrito está vacío.</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Tu Carrito</h1>
      <ul style={styles.cartList}>
        {cart.map((item) => (
          <li key={item.objectID} style={styles.cartItem}>
            <img src={item.image} alt={item.name} style={styles.itemImage} />
            <div style={styles.itemDetails}>
              <h2 style={styles.itemName}>{item.name}</h2>
              <p style={styles.itemPrice}>${item.price}</p>
              <button
                onClick={() => handleRemove(item.objectID)}
                style={styles.removeButton}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleClear} style={styles.clearButton}>
        Limpiar Carrito
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  cartList: {
    listStyle: "none",
    padding: 0,
  },
  cartItem: {
    display: "flex",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  itemImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  itemDetails: {
    marginLeft: "20px",
  },
  itemName: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  itemPrice: {
    fontSize: "1rem",
    marginBottom: "10px",
  },
  removeButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  clearButton: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  emptyCart: {
    textAlign: "center",
    fontSize: "1.5rem",
    color: "#555",
  },
};

export default Cart;
