import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const useOrders = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  // 1. Load existing orders from storage
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem('smartcart_orders');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Save to storage whenever orders change
  useEffect(() => {
    localStorage.setItem('smartcart_orders', JSON.stringify(orders));
  }, [orders]);

  // 3. Function to add a new order
  const addOrder = (cartItems, totalAmount) => {
    const newOrder = {
      id: "ORD-" + Date.now(), // Unique ID like ORD-17382910
      date: new Date().toLocaleDateString(),
      items: cartItems,
      total: totalAmount,
      status: "Processing 🚚"
    };
    
    // Add new order to the START of the list (newest first)
    setOrders(prev => [newOrder, ...prev]);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};