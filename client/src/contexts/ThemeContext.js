import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Check local storage so the site remembers the choice
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('smartcart_theme') === 'dark';
  });

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    // This actually flips the switch in the browser
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('smartcart_theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('smartcart_theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};