import React, { createContext, useContext, useState, useEffect } from 'react';

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  // Load history from computer memory on startup
  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('mySearchHistory')) || [];
    setSearchHistory(savedHistory);
  }, []);

  // Function to add a new search term
  const addToHistory = (term) => {
    if (!term.trim()) return;
    
    // Remove duplicates and keep only last 5
    const newHistory = [term, ...searchHistory.filter(h => h !== term)].slice(0, 5);
    
    setSearchHistory(newHistory);
    localStorage.setItem('mySearchHistory', JSON.stringify(newHistory));
  };

  // Function to clear history
  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('mySearchHistory');
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchHistory, addToHistory, clearHistory }}>
      {children}
    </SearchContext.Provider>
  );
};