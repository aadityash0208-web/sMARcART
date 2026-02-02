import React from 'react';
import '../styles/Wishlist.css';

const GiftCards = () => {
  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h2>🎁 Gift Cards</h2>
      </div>
      <div className="empty-wishlist">
        <h3>No Active Gift Cards</h3>
        <p>Buy a gift card for your friends or family today!</p>
        <button className="move-cart-btn" style={{width: '200px', margin: '20px auto'}}>Buy Gift Card</button>
      </div>
    </div>
  );
};
export default GiftCards;