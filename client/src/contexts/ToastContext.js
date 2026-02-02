import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

  // UseCallback ensures this function is stable
  const showToast = useCallback((message, type = 'info') => {
    setToast({ show: true, message, type });

    // Auto-hide after 3 seconds
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'info' });
    }, 3000);
  }, []);

  const hideToast = () => {
    setToast({ show: false, message: '', type: 'info' });
  };

  return (
    <ToastContext.Provider value={{ toast, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};