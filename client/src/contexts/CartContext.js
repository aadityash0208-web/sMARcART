import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Context
const CartContext = createContext();

// Custom Hook to use the Cart
export const useCart = () => {
  return useContext(CartContext);
};

// Provider Component
export const CartProvider = ({ children }) => {
  // 1. Initialize Cart from LocalStorage (so data persists on refresh)
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Failed to load cart from storage", error);
      return [];
    }
  });

  // 2. Save to LocalStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // --- ACTIONS ---

  // Add Item to Cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if item already exists
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // If exists, just increase quantity
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If new, add it with quantity 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Update Quantity (Increase/Decrease)
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent going below 1
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear Cart (For after payment)
  const clearCart = () => {
    setCartItems([]);
  };

  // Value object to share with all components
  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};