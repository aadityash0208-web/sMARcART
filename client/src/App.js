import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './styles/CursorAnimation.css'; // ✅ ADD THIS

// Components
import Navbar from './components/Navbar';
import BackgroundAnimation from './components/BackgroundAnimation';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Footer from './components/Footer'; 
import Toast from './components/Toast';
import SmartPoints from './pages/SmartPoints';
import Coupons from './pages/Coupons';
import GiftCards from './pages/GiftCards';
// Contexts
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { OrderProvider } from './contexts/OrderContext'; 
import { ToastProvider } from './contexts/ToastContext';
import { SearchProvider } from './contexts/SearchContext';
import { PointsProvider } from './contexts/PointsContext';

import './styles/App.css'; 

// 🔥 NEW INNER COMPONENT FOR ANIMATION 🔥
// Add this DIRECTLY inside App.js at the top
// 👇 REPLACE THE OLD CURSOR COMPONENT WITH THIS NEW ONE
const CursorAnimation = () => {
  const dotRef = React.useRef(null);
  const iconRef = React.useRef(null); // Changed from ringRef to iconRef

  React.useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      // 1. Move the small dot instantly
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }

      // 2. Move the Shopping Cart with a smooth delay
      if (iconRef.current) {
        iconRef.current.style.left = `${clientX}px`;
        iconRef.current.style.top = `${clientY}px`;
      }
    };

    // 3. Add "Click" effect (Tilt the cart)
    const handleMouseDown = () => {
      if (iconRef.current) iconRef.current.classList.add('click-anim');
    };
    const handleMouseUp = () => {
      if (iconRef.current) iconRef.current.classList.remove('click-anim');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* The Precision Dot */}
      <div className="cursor-dot" ref={dotRef}></div>
      
      {/* The Floating Cart Icon */}
      <div className="cursor-icon" ref={iconRef}>
        <i className="fas fa-shopping-cart"></i> {/* 🛒 Icon */}
      </div>
    </>
  );
};

const AppContent = () => {
  const location = useLocation(); // Tracks the current page URL

  return (
    <>
      <Navbar />
      <Toast />
      
      <div className="main-content">
        {/* The 'key' forces React to restart animation on route change */}
        <div key={location.pathname} className="page-animate">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/login" element={<Login />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/smart-points" element={<SmartPoints />} />
                  <Route path="/coupons" element={<Coupons />} />
                  <Route path="/gift-cards" element={<GiftCards />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
};

function App() {
  return (
    <ToastProvider>
      <SearchProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <NotificationProvider>
                <OrderProvider>
                  <PointsProvider>
                    <ThemeProvider>
                      <Router>
                      <BackgroundAnimation />
                      <CursorAnimation />
                        {/* We moved the content into AppContent so we can use useLocation */}
                        <AppContent />
                      </Router>
                    </ThemeProvider>
                  </PointsProvider>
                </OrderProvider>
              </NotificationProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </SearchProvider>
    </ToastProvider>
  );
}

export default App;
