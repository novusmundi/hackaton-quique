import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logoText}>ByteCrafters</h1>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><a href="/" style={styles.navLink}>Inicio</a></li>        
        <li style={styles.navItem}><a href="/about" style={styles.navLink}>Sobre Nosotros</a></li>
        <li style={styles.navItem}><a href="/cart" style={styles.navLink}>Carrito</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#1e293b', // Fondo oscuro moderno
    color: '#f1f5f9', // Texto claro
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Sombra suave
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#007bff', // Color principal
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '15px', // Espaciado entre los elementos
  },
  navItem: {
    fontSize: '1rem',
  },
  navLink: {
    textDecoration: 'none',
    color: '#f1f5f9', // Texto claro
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  navLinkHover: {
    backgroundColor: '#334155', // Fondo al pasar el mouse
  },
};

export default Navbar;
