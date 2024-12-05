import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../utils/cartUtils";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true);
    setTimeout(() => setShowModal(false), 2000);
  };

  return (
    <div style={styles.container}>
      {/* Modal Mejorado */}
      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <div style={styles.modalIcon}>
              ✅
            </div>
            <p style={styles.modalText}>¡Producto añadido al carrito!</p>
          </div>
        </div>
      )}

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
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    animation: "fadeIn 0.3s ease",
  },
  modalContent: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
    width: "300px",
    animation: "scaleUp 0.3s ease",
  },
  modalIcon: {
    fontSize: "3rem",
    color: "#28a745",
    marginBottom: "15px",
  },
  modalText: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#333",
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
    transition: "background-color 0.3s ease",
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
    transition: "background-color 0.3s ease",
  },
  "@keyframes fadeIn": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  "@keyframes scaleUp": {
    from: { transform: "scale(0.8)" },
    to: { transform: "scale(1)" },
  },
};

export default ProductDetails;
