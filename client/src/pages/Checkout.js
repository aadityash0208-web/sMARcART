import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNotifications } from '../contexts/NotificationContext';
import { useOrders } from '../contexts/OrderContext'; // <--- 1. IMPORT
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const Checkout = () => {
  const { cart, clearCart, finalTotal } = useCart(); // Ensure you get finalTotal
  const { addNotification } = useNotifications();
  const { addOrder } = useOrders(); // <--- 2. GET HOOK
  const navigate = useNavigate();

  // ... keep your form state (formData, handleChange) ...
  const [formData, setFormData] = useState({
    name: '', email: '', address: '', city: '', zip: '', card: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    
    if(cart.length === 0) return;
    const paidAmount = finalTotal || 0;

    // 3. SAVE THE ORDER
    addOrder(cart, finalTotal); 

    // 4. COUPON REWARD
    const couponCode = "SAVE" + Math.floor(Math.random() * 50 + 10); 
    addNotification(`🎉 Order Placed! You earned a coupon: ${couponCode}`, 'reward');
    addNotification(`🚚 Order #${Date.now().toString().slice(-4)} is being processed!`, 'info');

    // 5. CLEAN UP
    clearCart();
    navigate('/profile'); // Redirect to Profile to see the order
  };

  // ... rest of your JSX (render logic) ...
  return (
      <div className="checkout-container">
          {/* ... keep your existing form code ... */}
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
              <h2>Checkout</h2>
              {/* Inputs... */}
              <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
              <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
              <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
              <div className="form-row">
                  <input type="text" name="city" placeholder="City" required onChange={handleChange} />
                  <input type="text" name="zip" placeholder="Zip Code" required onChange={handleChange} />
              </div>
              <input type="text" name="card" placeholder="Card Number (Fake)" required onChange={handleChange} />
              
              <h3>Total to Pay: ₹{finalTotal}</h3>
              <button type="submit" className="place-order-btn">Place Order</button>
          </form>
      </div>
  );
};

export default Checkout;