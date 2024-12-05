import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Sobre Nosotros</h1>
      <p style={styles.description}>
        En <strong>ByteCrafters</strong>, nos especializamos en ofrecer productos tecnológicos de la más alta calidad. Visítanos o contáctanos para más información.
      </p>

      {/* Información de contacto */}
      <div style={styles.infoContainer}>
        <div style={styles.infoItem}>
          <h2 style={styles.infoHeading}>Dirección</h2>
          <p>123 Calle Innovación, Ciudad Tecnológica</p>
        </div>
        <div style={styles.infoItem}>
          <h2 style={styles.infoHeading}>Teléfono</h2>
          <p><a href="tel:+123456789" style={styles.link}>+1 234 567 89</a></p>
        </div>
      </div>

      {/* Mapa */}
      <div style={styles.mapContainer}>
        <iframe
          title="Mapa de la Tienda"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243648.84994044993!2d-74.11808694201152!3d40.70531103105753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2b63622a0c7ae0ae!2sGoogle!5e0!3m2!1ses!2s!4v1667352671737!5m2!1ses!2s"
          width="100%"
          height="300"
          style={styles.iframe}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#333",
    marginBottom: "20px",
  },
  infoContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  },
  infoItem: {
    textAlign: "center",
  },
  infoHeading: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: "10px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "1rem",
  },
  mapContainer: {
    marginTop: "20px",
  },
  iframe: {
    border: "none",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default About;
