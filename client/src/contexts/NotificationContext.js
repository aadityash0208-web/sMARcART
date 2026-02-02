import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  // Mock Data with different dates for testing
  const [notifications, setNotifications] = useState([
    { id: 1, text: "Order #12345 placed successfully! 📦", timestamp: new Date().toISOString(), read: false }, // Today
    { id: 2, text: "Your refund of ₹500 has been processed.", timestamp: new Date(Date.now() - 86400000).toISOString(), read: true }, // Yesterday
    { id: 3, text: "Welcome to SmartCart! 🚀", timestamp: new Date(Date.now() - 172800000).toISOString(), read: true }, // 2 Days ago
    { id: 4, text: "Flash Sale starts tomorrow! ⚡", timestamp: new Date(Date.now() - 172800000).toISOString(), read: true } // 2 Days ago
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const addNotification = (text) => {
    const newNote = {
      id: Date.now(),
      text,
      timestamp: new Date().toISOString(),
      read: false
    };
    setNotifications(prev => [newNote, ...prev]);
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <NotificationContext.Provider value={{ notifications, unreadCount, addNotification, markAllAsRead }}>
      {children}
    </NotificationContext.Provider>
  );
};