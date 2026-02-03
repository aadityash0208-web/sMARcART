import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

// Contexts
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useToast } from '../contexts/ToastContext';

// Data
import { products } from './products';

// Styles
import '../styles/ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('specs');

  // Find the exact product by ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="not-found"><h2>Product not found</h2><button onClick={() => navigate('/')}>Home</button></div>;

  const isLiked = isInWishlist(product.id);
  // Recommend items from the same category
  const similarProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const renderSpecs = () => {
    return (
      <tbody>
        <tr><td>Brand</td><td>{product.brand}</td></tr>
        <tr><td>Model</td><td>{product.baseName}</td></tr>
        <tr><td>Color</td><td>{product.color}</td></tr>
        <tr><td>Configuration</td><td>{product.variant}</td></tr>
        <tr><td>Stock Status</td><td>In Stock</td></tr>
        <tr><td>Warranty</td><td>1 Year Official</td></tr>
      </tbody>
    );
  };

  return (
    <div className="details-container">
      <div className="details-wrapper">
        <div className="details-image fade-in-left">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="details-info fade-in-right">
          <span className="details-category">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="details-rating-row"><div className="rating-badge">⭐ {product.rating}</div> <span>({product.reviews} Reviews)</span></div>
          <div className="details-price-row"><span className="details-price">₹{product.price.toLocaleString()}</span></div>
          <p className="short-desc">{product.desc}</p>
          
          <div className="details-actions">
            <button className="action-btn cart-btn" onClick={() => {addToCart(product); showToast("Added to Cart!", "success");}}>
              <i className="fas fa-shopping-bag"></i> Add to Cart
            </button>
            
          </div>
        </div>
      </div>
      
      <div className="details-tabs-section">
        <div className="tabs-header">
          <button className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`} onClick={() => setActiveTab('specs')}>Specifications</button>
          <button className={`tab-btn ${activeTab === 'desc' ? 'active' : ''}`} onClick={() => setActiveTab('desc')}>Description</button>
        </div>
        <div className="tab-content">
          {activeTab === 'specs' ? <div className="specs-content"><table>{renderSpecs()}</table></div> : <div className="desc-content"><p>{product.desc}</p></div>}
        </div>
      </div>

      <div className="recommendations-section">
        <h3>Similar Products</h3>
        <div className="rec-grid">
          {similarProducts.map(p => (
            <Link to={`/product/${p.id}`} key={p.id} className="rec-card" target="_blank">
              <img src={p.image} alt={p.name} />
              <div className="rec-info"><h5>{p.name}</h5><p>₹{p.price.toLocaleString()}</p></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;