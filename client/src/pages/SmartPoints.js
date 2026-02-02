import React from 'react';
import '../styles/Wishlist.css'; // Reusing wishlist styles for consistency

const SmartPoints = () => {
  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h2>🪙 My Smart Points</h2>
      </div>
      <div className="empty-wishlist">
        <h3>Total Balance: 500 Points</h3>
        <p>Use these points to get discounts on your next purchase!</p>
        <button style={{marginTop: '20px', padding: '10px 20px', background: '#f1c40f', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'}}>
          Redeem Now
        </button>
      </div>
    </div>
  );
};
export default SmartPoints;