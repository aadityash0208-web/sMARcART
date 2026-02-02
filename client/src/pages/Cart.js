import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  // Safe Context Access
  const { cartItems = [], removeFromCart, updateQuantity, clearCart } = useCart() || {};
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const safeCartItems = Array.isArray(cartItems) ? cartItems : [];

  // Calculate Prices
  const totalPrice = safeCartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discount = Math.floor(totalPrice * 0.1); // Fake 10% discount
  const finalAmount = totalPrice - discount;

  // --- MOCK DATA FOR "SIMILAR" & "RECENTLY VIEWED" ---
  const similarProducts = [
    { id: 201, name: "Sony WH-1000XM5", price: 26990, image: "https://m.media-amazon.com/images/I/51SKmu2G9FL._AC_SL1000_.jpg" },
    { id: 202, name: "Samsung Galaxy Buds2", price: 8999, image: "https://m.media-amazon.com/images/I/61qqh9e-sRL._AC_SL1500_.jpg" },
    { id: 203, name: "JBL Flip 6 Speaker", price: 11999, image: "https://m.media-amazon.com/images/I/719i140FjQL._AC_SL1500_.jpg" }
  ];

  const recentlyViewed = [
    { id: 301, name: "Gaming Keyboard", price: 3499, image: "https://m.media-amazon.com/images/I/61T059w3NlL._AC_SL1200_.jpg" },
    { id: 302, name: "4K Monitor 27inch", price: 22999, image: "https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_SL1500_.jpg" },
    { id: 303, name: "Logitech Webcam", price: 4995, image: "https://m.media-amazon.com/images/I/61yo4swj-PL._AC_SL1500_.jpg" }
  ];

  // --- RAZORPAY PAYMENT ---
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!user) {
      alert("Please login to proceed with payment");
      navigate('/login');
      return;
    }

    setLoading(true);
    const res = await loadRazorpay();

    if (!res) {
      alert('Razorpay SDK failed to load.');
      setLoading(false);
      return;
    }

    const options = {
      key: "rzp_test_S7xQc1NW5KiExe", // ⚠️ REPLACE WITH YOUR ACTUAL KEY
      amount: totalPrice * 100,
      currency: "INR",
      name: "SmartCart",
      description: "Order Payment",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert(`Payment Successful! Pay ID: ${response.razorpay_payment_id}`);
        if (clearCart) clearCart(); 
        navigate('/orders');
      },
      prefill: {
        name: user.name,
        email: user.email,
        contact: "9999999999",
      },
      theme: {
        color: "#6c5ce7",
      },
      config: {
        display: {
          blocks: {
            upi: {
              name: "Pay via UPI",
              instruments: [{ method: "upi" }],
            },
          },
          sequence: ["block.upi", "block.card"],
          preferences: { show_default_blocks: true },
        },
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  if (safeCartItems.length === 0) {
    return (
      <div className="empty-cart-container">
        <h3>Your Cart is Empty</h3>
        <button className="start-shopping-btn" onClick={() => navigate('/')}>
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page-wrapper">
      
      {/* --- LEFT COLUMN: ITEMS & SUGGESTIONS --- */}
      <div className="cart-left-section">
        
        {/* 1. CART ITEMS LIST */}
        <div className="cart-items-container">
          {safeCartItems.map((item) => (
            <div key={item.id} className="fk-cart-card">
              
              {/* Top Row: Image & Core Info */}
              <div className="fk-card-top">
                <div className="fk-image-box">
                  <img src={item.image} alt={item.name} />
                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>–</button>
                    <input type="text" value={item.quantity} readOnly />
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </div>

                <div className="fk-details-box">
                  <div className="fk-title-row">
                    <h3>{item.name}</h3>
                    <p className="delivery-date">Delivery by {new Date(Date.now() + 3 * 86400000).toDateString().slice(0, 10)} | <span className="free">Free</span></p>
                  </div>
                  
                  <div className="fk-price-row">
                    <span className="price-new">₹{item.price}</span>
                    <span className="price-old">₹{Math.floor(item.price * 1.2)}</span>
                    <span className="discount">20% Off</span>
                  </div>

                  {/* Actions */}
                  <div className="fk-actions-row">
                    <span className="action-btn">SAVE FOR LATER</span>
                    <span className="action-btn remove" onClick={() => removeFromCart(item.id)}>REMOVE</span>
                  </div>
                </div>
              </div>

              {/* Middle Row: Description & Specs (As requested) */}
              <div className="fk-extra-details">
                <h4>Description</h4>
                <p>{item.desc || "High quality product with premium finish and durable materials. Perfect for daily use."}</p>
                
                <h4>Specifications</h4>
                <ul className="fk-specs-list">
                  <li>Brand: Generic</li>
                  <li>Material: Premium Quality</li>
                  <li>Warranty: 1 Year Manufacturer Warranty</li>
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* 2. SIMILAR PRODUCTS SECTION */}
        <div className="suggestions-section">
          <h3>Similar Products</h3>
          <div className="suggestions-grid">
            {similarProducts.map(prod => (
              <div key={prod.id} className="suggestion-card">
                <img src={prod.image} alt={prod.name} />
                <p className="sug-name">{prod.name}</p>
                <p className="sug-price">₹{prod.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. RECENTLY VIEWED SECTION */}
        <div className="suggestions-section">
          <h3>Recently Viewed</h3>
          <div className="suggestions-grid">
            {recentlyViewed.map(prod => (
              <div key={prod.id} className="suggestion-card">
                <img src={prod.image} alt={prod.name} />
                <p className="sug-name">{prod.name}</p>
                <p className="sug-price">₹{prod.price}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- RIGHT COLUMN: PRICE DETAILS (Sticky) --- */}
      <div className="cart-right-section">
        <div className="price-details-card">
          <span className="price-header">PRICE DETAILS</span>
          <hr />
          
          <div className="price-row">
            <span>Price ({safeCartItems.length} items)</span>
            <span>₹{totalPrice}</span>
          </div>
          
          <div className="price-row">
            <span>Discount</span>
            <span className="green-text">− ₹{discount}</span>
          </div>
          
          <div className="price-row">
            <span>Delivery Charges</span>
            <span className="green-text">Free</span>
          </div>
          
          <hr className="dashed" />
          
          <div className="total-amount-row">
            <span>Total Amount</span>
            <span>₹{finalAmount}</span>
          </div>
          
          <hr className="dashed" />
          <div className="savings-msg">You will save ₹{discount} on this order</div>

          {/* PLACE ORDER BUTTON */}
          <button className="place-order-btn" onClick={handlePayment} disabled={loading}>
            {loading ? "Processing..." : "PLACE ORDER"}
          </button>
        </div>
        
        {/* Trust Badge */}
        <div className="trust-badge">
          <i className="fas fa-shield-alt"></i> Safe and Secure Payments. 100% Authentic products.
        </div>
      </div>

    </div>
  );
};

export default Cart;