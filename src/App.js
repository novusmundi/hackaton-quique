import React from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
