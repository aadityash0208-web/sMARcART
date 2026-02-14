import axios from 'axios';

const API = axios.create({ baseURL: 'https://smarcart.onrender.com/api' });

// Add Token to every request
API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) req.headers.Authorization = `Bearer ${user.token}`;
  return req;
});

export const authAPI = {
  login: async (creds) => {
    const res = await API.post('/auth/login', creds);
    if (res.data.token) localStorage.setItem('user', JSON.stringify(res.data));
    return res.data;
  },
  register: async (data) => {
    const res = await API.post('/auth/register', data);
    if (res.data.token) localStorage.setItem('user', JSON.stringify(res.data));
    return res.data;
  },
  getCurrentUser: async () => { const res = await API.get('/auth/me'); return res.data; },
  updateProfile: async (data) => { const res = await API.put('/auth/profile', data); return res.data; },
  logout: () => { localStorage.removeItem('user'); window.location.href = '/login'; }
};

export const productsAPI = {
  getAll: async (category, search) => {
    const params = {};
    if (category && category !== 'All') params.category = category;
    if (search) params.search = search;
    const res = await API.get('/products', { params });
    return res.data;
  },
  getOne: async (id) => { const res = await API.get(`/products/${id}`); return res.data; },
  
  // --- ADMIN FUNCTIONS ---
  create: async (productData) => { const res = await API.post('/products', productData); return res.data; },
  delete: async (id) => { const res = await API.delete(`/products/${id}`); return res.data; }
};

export const ordersAPI = {
  createOrder: async (data) => { const res = await API.post('/orders', data); return res.data; },
  getMyOrders: async () => { const res = await API.get('/orders/myorders'); return res.data; },
  
  // --- ADMIN FUNCTION ---
  getAllOrders: async () => { const res = await API.get('/orders/all'); return res.data; }
};
export const paymentAPI = {
  createPaymentOrder: async (amount) => {
    const res = await API.post('/payment/orders', { amount });
    return res.data;
  },
  verifyPayment: async (data) => {
    const res = await API.post('/payment/verify', data);
    return res.data;
  }
};

export default API;