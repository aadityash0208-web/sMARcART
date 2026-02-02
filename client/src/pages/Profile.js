import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import { useToast } from '../contexts/ToastContext'; 
import '../styles/Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { logout } = useAuth();
  const { isDarkMode } = useTheme();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      showToast('Logged out successfully', 'success');
      navigate('/login');
    } catch {
      showToast('Failed to log out', 'error');
    }
  };

  return (
    <div className="profile-container">
      <div className="dashboard-layout">
        
        {/* --- SIDEBAR MENU (Fixed Colors) --- */}
        <div className="dashboard-sidebar">
          <h3>My Account</h3>
          <ul>
            <li className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
              <i className="fas fa-user"></i> My Profile
            </li>
            
            <li className={activeTab === 'points' ? 'active' : ''} onClick={() => setActiveTab('points')}>
              <i className="fas fa-coins" style={{color: '#f1c40f'}}></i> Smart Points
            </li>

            {/* 🔵 ORDERS (Blue) */}
            <li className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>
              <i className="fas fa-box" style={{color: '#0984e3'}}></i> Orders
            </li>
            
            {/* 🌸 COUPONS (Pink) */}
            <li className={activeTab === 'coupons' ? 'active' : ''} onClick={() => setActiveTab('coupons')}>
              <i className="fas fa-ticket-alt" style={{color: '#e84393'}}></i> Coupons
            </li>

            {/* 🟡🔵 GIFT CARDS (Gradient) */}
            <li className={activeTab === 'giftcards' ? 'active' : ''} onClick={() => setActiveTab('giftcards')}>
              <i className="fas fa-gift" style={{
                  background: 'linear-gradient(135deg, #f1c40f 0%, #0984e3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
              }}></i> Gift Cards
            </li>

            <li className="logout-item" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </li>
          </ul>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="dashboard-content">
          
          {/* PROFILE VIEW */}
          {activeTab === 'profile' && (
            <div className="profile-view fade-in">
              <div className="profile-header">
                <div className="profile-avatar">
                  <span>AK</span>
                </div>
                <div className="profile-info">
                  <h2>Aditya Kumar</h2>
                  <p>aditya@example.com</p>
                  <span className="badge pro">Pro Member</span>
                </div>
              </div>
              <div className="profile-details">
                <div className="detail-item">
                  <label>Phone</label>
                  <p>+91 98765 43210</p>
                </div>
                <div className="detail-item">
                  <label>Address</label>
                  <p>123, Cyber Street, Mumbai, India</p>
                </div>
                <button className="edit-btn">Edit Profile</button>
              </div>
            </div>
          )}

          {/* POINTS VIEW */}
          {activeTab === 'points' && (
             <div className="points-view fade-in">
               <h3>My Smart Points</h3>
               <div className="points-balance-card">
                 <i className="fas fa-coins coin-spin"></i>
                 <h1>1,250</h1>
                 <p>Total Available Points</p>
               </div>
             </div>
          )}

          {/* ORDERS VIEW */}
          {activeTab === 'orders' && (
            <div className="orders-view fade-in">
              <h3>My Orders</h3>
              <div className="order-card">
                <div className="order-header">
                  <h4><i className="fas fa-box"></i> Order #49283</h4>
                  <span className="order-status delivered">Delivered</span>
                </div>
                <p>iPhone 15 Pro (Black Ultra)</p>
                <p className="order-date">Placed on: 20 Oct 2025</p>
              </div>
            </div>
          )}

          {/* COUPONS VIEW */}
          {activeTab === 'coupons' && (
            <div className="coupons-view fade-in">
              <h3>My Coupons</h3>
              <div className="coupon-ticket">
                 <div className="coupon-left">
                   <h4>WELCOME50</h4>
                   <p>Get 50% OFF on your next order</p>
                 </div>
                 <div className="coupon-right">
                   <i className="fas fa-ticket-alt coupon-icon"></i>
                 </div>
              </div>
            </div>
          )}

           {/* GIFT CARDS VIEW */}
           {activeTab === 'giftcards' && (
            <div className="giftcards-view fade-in">
              <h3>My Gift Cards</h3>
              <div className="gift-card-box">
                 <i className="fas fa-gift"></i>
                 <h3>Happy Birthday</h3>
                 <p>₹1,000 Voucher</p>
                 <p style={{fontSize:'0.8rem', marginTop:'10px'}}>Code: BD-2025-X8Y2</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Profile;