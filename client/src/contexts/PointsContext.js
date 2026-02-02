import React, { createContext, useContext, useState, useEffect } from 'react';

const PointsContext = createContext();

export const usePoints = () => useContext(PointsContext);

export const PointsProvider = ({ children }) => {
  const [points, setPoints] = useState(() => {
    return parseInt(localStorage.getItem('smartPoints')) || 0;
  });

  useEffect(() => {
    localStorage.setItem('smartPoints', points);
  }, [points]);

  // 👇 CHANGED: Now earn 1 point for every ₹20 spent!
  const addPointsFromPurchase = (totalAmount) => {
    const pointsEarned = Math.floor(totalAmount / 20); 
    setPoints(prev => prev + pointsEarned);
    return pointsEarned;
  };

  return (
    <PointsContext.Provider value={{ points, addPointsFromPurchase }}>
      {children}
    </PointsContext.Provider>
  );
};