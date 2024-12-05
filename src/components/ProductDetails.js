import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <div>
        <p>Producto no encontrado.</p>
        <button onClick={() => navigate("/")}>Volver a la lista de productos</button>
      </div>
    );
  }

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
        <button onClick={() => addToCart(product)} style={styles.addButton}>
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
  backButton: {
    display: "inline-block",
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background-color 0.3s ease",
  },
  backButtonHover: {
    backgroundColor: "#0056b3",
  },
  errorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  errorText: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    color: "#d9534f",
  },
};

export default ProductDetails;
