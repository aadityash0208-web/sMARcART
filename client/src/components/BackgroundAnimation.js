

import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Import your theme context
import '../styles/BackgroundAnimation.css';

const BackgroundAnimation = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`background-container ${isDarkMode ? 'dark-bg' : 'light-bg'}`}>
      {/* Floating Shapes */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      
      {/* Mesh Grid Overlay (Optional: adds a tech feel) */}
      <div className="grid-overlay"></div>
    </div>
  );
};

export default BackgroundAnimation;