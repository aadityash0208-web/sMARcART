import React, { useState, useEffect } from 'react';
import { productsAPI, ordersAPI } from '../services/api';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // Form State for adding new products
  const [newProduct, setNewProduct] = useState({
    title: '', category: 'Electronics', price: '', stock: '', image: '', description: ''
  });

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'products') {
        const data = await productsAPI.getAll('All');
        setProducts(data);
      } else {
        const data = await ordersAPI.getAllOrders();
        setOrders(data);
      }
    } catch (err) { console.error("Error fetching data:", err); }
    setLoading(false);
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await productsAPI.delete(id);
      fetchData(); // Refresh the list
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      await productsAPI.create(newProduct);
      alert('✅ Product Added Successfully!');
      setNewProduct({ title: '', category: 'Electronics', price: '', stock: '', image: '', description: '' });
      fetchData(); // Refresh the list
    } catch (err) {
      alert('❌ Failed to add product');
    }
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      
      <div className="admin-tabs">
        <button className={activeTab === 'products' ? 'active' : ''} onClick={() => setActiveTab('products')}>Manage Products</button>
        <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>View All Orders</button>
      </div>

      <div className="admin-content">
        {loading ? <p>Loading data...</p> : (
          <>
            {activeTab === 'products' ? (
              <div>
                {/* ADD PRODUCT FORM */}
                <div className="add-product-card">
                  <h3>Add New Product</h3>
                  <form onSubmit={handleAddProduct} className="admin-form">
                    <input type="text" placeholder="Title" value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})} required />
                    <div className="form-row">
                      <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                        <option>Electronics</option><option>Clothing</option><option>Books</option><option>Home & Garden</option>
                      </select>
                      <input type="number" placeholder="Price (₹)" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} required />
                      <input type="number" placeholder="Stock" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})} required />
                    </div>
                    <input type="text" placeholder="Image URL (http://...)" value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} required />
                    <textarea placeholder="Description" value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} required />
                    <button type="submit" className="add-btn">Add Product</button>
                  </form>
                </div>

                {/* PRODUCT LIST */}
                <h3>Product List ({products.length})</h3>
                <div className="admin-product-list">
                  {products.map(p => (
                    <div key={p._id} className="admin-product-item">
                      <img src={p.image} alt={p.title} onError={(e) => e.target.src='https://via.placeholder.com/50'} />
                      <div className="p-details">
                        <h4>{p.title}</h4>
                        <p>₹{p.price} | Stock: {p.stock}</p>
                      </div>
                      <button onClick={() => handleDeleteProduct(p._id)} className="delete-btn">Delete</button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                {/* ORDER LIST */}
                <h3>All Customer Orders ({orders.length})</h3>
                <div className="admin-order-list">
                  {orders.map(order => (
                    <div key={order._id} className="admin-order-card">
                      <div className="ao-header">
                        <span>Order #{order._id.slice(-6).toUpperCase()}</span>
                        <span className="ao-user">User: {order.user?.name || 'Unknown'}</span>
                        <span className="ao-price">₹{order.totalPrice}</span>
                      </div>
                      <div className="ao-items">
                        {order.orderItems.map(item => (
                          <span key={item._id} className="ao-item-tag">{item.title} (x{item.quantity})</span>
                        ))}
                      </div>
                      <p className="ao-date">{new Date(order.createdAt).toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;