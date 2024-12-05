export const getCart = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };
  
  export const addToCart = (product) => {
    const cart = getCart();
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  
  export const removeFromCart = (id) => {
    const cart = getCart();
    const updatedCart = cart.filter((item) => item.objectID !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  
  export const clearCart = () => {
    localStorage.removeItem("cart");
  };
  