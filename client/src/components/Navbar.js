import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import { useTheme } from '../contexts/ThemeContext';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const { isDarkMode, toggleTheme } = useTheme();
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // --- STATE ---
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  
  // Dropdown States
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showNotiDropdown, setShowNotiDropdown] = useState(false);

  // --- MOCK NOTIFICATIONS ---
  const notifications = [
    { id: 1, text: "Your order #1234 has been shipped!", time: "2m ago", unread: true },
    { id: 2, text: "New Offer: Flat 20% off on Shoes", time: "1h ago", unread: true },
    { id: 3, text: "Welcome to SmartCart!", time: "1d ago", unread: false }
  ];
  const unreadCount = notifications.filter(n => n.unread).length;

  // --- LOAD SEARCH HISTORY ---
  useEffect(() => {
    try {
      const saved = localStorage.getItem('recentSearches');
      if (saved) setRecentSearches(JSON.parse(saved));
    } catch (error) {}
  }, []);

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      const updatedHistory = [searchQuery, ...recentSearches.filter(item => item !== searchQuery)].slice(0, 5);
      setRecentSearches(updatedHistory);
      localStorage.setItem('recentSearches', JSON.stringify(updatedHistory));
      setShowDropdown(false);
      navigate('/'); 
    }
  };

  const clearHistory = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark-nav' : ''}`}>
      {/* 1. LOGO */}
      <div className="navbar-brand" onClick={() => navigate('/')}>
        <i className="fas fa-shopping-cart logo-icon"></i>
        <span className="logo-text">SmartCart</span>
      </div>

      {/* 2. SEARCH BAR */}
      <div className="search-container">
        <div className="search-wrapper">
          <i className="fas fa-search search-icon"></i>
          <input 
            type="text" 
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchSubmit}
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          />
        </div>

        {showDropdown && recentSearches.length > 0 && (
          <div className="search-dropdown">
            <div className="dropdown-header">
              <span>Recent Searches</span>
              <button className="clear-btn" onClick={clearHistory}>Clear</button>
            </div>
            {recentSearches.map((term, index) => (
              <div key={index} className="dropdown-item" onMouseDown={() => {
                setSearchQuery(term);
                setShowDropdown(false);
                navigate('/');
              }}>
                <i className="fas fa-history"></i> {term}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. ACTIONS */}
      <div className="navbar-actions">
        <Link to="/wishlist" className="icon-btn wishlist-icon-btn"><i className="fas fa-heart"></i></Link>

        <Link to="/cart" className="icon-btn cart-icon-btn">
          <i className="fas fa-shopping-cart"></i>
          {cartItems && cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
        </Link>

        {/* Notifications */}
        <div className="notification-container" onMouseEnter={() => setShowNotiDropdown(true)} onMouseLeave={() => setShowNotiDropdown(false)}>
          <button className="icon-btn notification-btn">
            <i className="fas fa-bell"></i>
            {unreadCount > 0 && <span className="noti-badge">{unreadCount}</span>}
          </button>
          {showNotiDropdown && (
            <div className="notification-dropdown">
              <div className="noti-header">Notifications ({unreadCount})</div>
              {notifications.map(note => (
                <div key={note.id} className={`noti-item ${note.unread ? 'unread' : ''}`}>
                  <div className="noti-icon"><i className="fas fa-info-circle"></i></div>
                  <div className="noti-content">
                    <p className="noti-text">{note.text}</p>
                    <span className="noti-time">{note.time}</span>
                  </div>
                </div>
              ))}
              <div className="noti-footer">View All</div>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button className="icon-btn" onClick={toggleTheme}>
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>

        {/* USER PROFILE DROPDOWN */}
        {user ? (
          <div className="user-menu-container" onMouseEnter={() => setShowUserDropdown(true)} onMouseLeave={() => setShowUserDropdown(false)}>
            <div className="user-chip" onClick={() => navigate('/profile')}>
              <i className="fas fa-user-circle"></i>
              <span>{user.name}</span>
            </div>
            
            {showUserDropdown && (
              <div className="profile-dropdown">
                {/* 1. Profile Link */}
                <Link to="/profile" className="profile-item">
                  <i className="fas fa-user icon-purple"></i> My Profile
                </Link>

                {/* 2. Smart Points Link (CLICKABLE NOW) */}
                <Link to="/smart-points" className="profile-item">
                  <i className="fas fa-coins icon-yellow"></i> Smart Points
                </Link>

                {/* 3. Orders Link */}
                <Link to="/orders" className="profile-item">
                  <i className="fas fa-box icon-blue"></i> Orders
                </Link>

                {/* 4. Coupons Link (CLICKABLE NOW) */}
                <Link to="/coupons" className="profile-item">
                  <i className="fas fa-ticket-alt icon-pink"></i> Coupons
                </Link>

                {/* 5. Gift Cards Link (CLICKABLE NOW) */}
                <Link to="/gift-cards" className="profile-item">
                  <i className="fas fa-gift icon-green"></i> Gift Cards
                </Link>

                <div className="profile-divider"></div>
                
                {/* 6. Logout */}
                <div onClick={logout} className="profile-item logout-text">
                  <i className="fas fa-sign-out-alt icon-red"></i> Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;