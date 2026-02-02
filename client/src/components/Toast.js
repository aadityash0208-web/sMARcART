import React from 'react';
import { useToast } from '../contexts/ToastContext';
import '../styles/Toast.css'; // We will add styles next

const Toast = () => {
  const { toast, hideToast } = useToast();

  if (!toast.show) return null;

  // Determine icon based on type
  const getIcon = () => {
    switch (toast.type) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'info': return 'ℹ️';
      case 'reward': return '🎉';
      default: return '📢';
    }
  };

  return (
    <div className={`toast-popup ${toast.type}`}>
      <span className="toast-icon">{getIcon()}</span>
      <p className="toast-message">{toast.message}</p>
      <button onClick={hideToast} className="toast-close">×</button>
    </div>
  );
};

export default Toast;