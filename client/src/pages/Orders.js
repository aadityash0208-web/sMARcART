import React, { useState, useEffect } from 'react';
import { ordersAPI } from '../services/api';
import { Link } from 'react-router-dom';
import '../styles/Orders.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await ordersAPI.getMyOrders();
        setOrders(data);
      } catch (err) {
        console.error("Failed to fetch orders", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div className="loading-screen">Loading your orders...</div>;

  return (
    <div className="orders-page">
      <h1>My Order History</h1>
      
      {orders.length === 0 ? (
        <div className="no-orders">
          <img src="https://cdn-icons-png.flaticon.com/512/10701/10701484.png" alt="No Orders" />
          <p>You haven't placed any orders yet.</p>
          <Link to="/" className="start-shopping-btn">Start Shopping</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <div>
                  <span className="order-id">Order #{order._id.slice(-6).toUpperCase()}</span>
                  <span className="order-date">{new Date(order.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="order-status">
                  <span className={order.isDelivered ? 'status-delivered' : 'status-processing'}>
                    {order.isDelivered ? 'Delivered' : 'Processing'}
                  </span>
                </div>
              </div>

              <div className="order-items-preview">
                {order.orderItems.map((item, index) => (
                  <div key={index} className="order-item-row">
                    <img src={item.image} alt={item.title} className="small-img" />
                    <div className="item-info">
                      <p className="item-title">{item.title}</p>
                      <p className="item-meta">Qty: {item.quantity} | ₹{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-footer">
                <span className="total-label">Total Amount:</span>
                <span className="total-price">₹{order.totalPrice.toLocaleString('en-IN')}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;