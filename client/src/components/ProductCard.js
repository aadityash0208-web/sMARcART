import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useToast } from '../contexts/ToastContext';
import '../styles/ProductCard.css'; 

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const isLiked = isInWishlist(product.id);

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    addToCart(product);
    showToast(`Added ${product.name} to cart!`, 'success');
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    if (isLiked) {
      removeFromWishlist(product.id);
      showToast('Removed from Wishlist', 'info');
    } else {
      addToWishlist(product);
      showToast('Added to Wishlist ❤️', 'success');
    }
  };

  return (
    // 👇 UPDATE: Added target="_blank" to open in new tab
    <Link to={`/product/${product.id}`} className="product-card" target="_blank" rel="noopener noreferrer">
      <div className="wishlist-icon" onClick={handleWishlist}>
        <i className={isLiked ? "fas fa-heart" : "far fa-heart"} style={{color: isLiked ? '#ff7675' : ''}}></i>
      </div>
      
      <img src={product.image} alt={product.name} loading="lazy" />
      
      <div className="product-details">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        
        <div className="product-meta">
          <span className="product-price">₹{product.price}</span>
          <span className="product-rating">★ {product.rating}</span>
        </div>

        <button className="add-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;