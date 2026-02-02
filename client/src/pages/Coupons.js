import React from 'react';
import '../styles/Wishlist.css';

const Coupons = () => {
  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h2>🎟️ My Coupons</h2>
      </div>
      <div className="wishlist-grid">
        {/* Mock Coupon Card */}
        <div className="wishlist-card" style={{textAlign: 'center', padding: '30px'}}>
          <h3 style={{color: '#e84393'}}>WELCOME50</h3>
          <p>Flat 50% Off on your first order</p>
          <button className="move-cart-btn">Copy Code</button>
        </div>
      </div>
    </div>
  );
};
export default Coupons;