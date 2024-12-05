import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../utils/cartUtils";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  if (!product) {
    return (
      <div>
        <p>Producto no encontrado.</p>
        <button onClick={() => navigate("/")}>Volver a la lista de productos</button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert("Producto añadido al carrito");
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.productImage}
        />
      </div>
      <div style={styles.detailsContainer}>
        <h1 style={styles.productTitle}>{product.name}</h1>
        <p style={styles.productPrice}>${product.price}</p>
        <p style={styles.productDescription}>
          <strong>Descripción:</strong> {product.description || "Sin descripción disponible."}
        </p>
        <p style={styles.productCategory}>
          <strong>Categoría:</strong> {product.category || "No especificada."}
        </p>
        <button onClick={handleAddToCart} style={styles.addButton}>
          Añadir al Carrito
        </button>
        <button onClick={() => navigate("/")} style={styles.backButton}>
          Volver a la lista de productos
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  imageContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  productImage: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    borderRadius: "10px",
    objectFit: "cover",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  detailsContainer: {
    width: "100%",
    textAlign: "left",
  },
  productTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  productPrice: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "20px",
  },
  productDescription: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "10px",
    color: "#555",
  },
  productCategory: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
    color: "#555",
  },
  addButton: {
    padding: "10px 15px",
    margin: "10px 5px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  backButton: {
    padding: "10px 15px",
    margin: "10px 5px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default ProductDetails;
