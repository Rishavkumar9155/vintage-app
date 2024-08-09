import React, { createContext, useState, useContext } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Create a provider component for the cart
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Remove an item from the cart
  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem !== item));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export { CartProvider, useCart }; // Export useCart as a named export
