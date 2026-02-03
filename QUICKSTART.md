# SmartCart - Quick Start Guide

## 🚀 Get Running in 3 Steps

### Step 1: Install Dependencies
```bash
npm run install-all
```

### Step 2: Configure Environment
Create `server/.env` file:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/smartcart
JWT_SECRET=your_super_secret_jwt_key_change_this
NODE_ENV=development
```

**For MongoDB Atlas:**
```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/smartcart
```

### Step 3: Seed Products (Optional)
```bash
npm run seed
```

### Step 4: Start the Application
```bash
npm run dev
```

This starts:
- **Backend:** http://localhost:5000
- **Frontend:** http://localhost:3000

## 🌐 **Production Deployment**

### **Live URLs (After Deployment)**
- **Backend:** https://smarcart-api.onrender.com
- **Frontend:** https://your-vercel-app.vercel.app

### **Deployment Notes**
- Backend deployed on Render with MongoDB Atlas
- Frontend configured to use live API endpoints
- Local development still uses localhost URLs

## 📋 What's Included

✅ **Backend (MVC Pattern)**
- Express.js server with CORS
- MongoDB connection with Mongoose
- JWT authentication
- User, Product, Order models
- Auth, Products, Orders API endpoints

✅ **Frontend (React)**
- React Router for navigation
- Context API for cart state
- Axios for API calls
- Responsive UI components
- Protected routes

## 🧪 Test the Application

1. **Register a new user** at `/login`
2. **Browse products** on the home page
3. **Add items to cart**
4. **Place an order** from the cart
5. **View order history** at `/orders`

## 🔧 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running locally, OR
- Update `MONGO_URI` in `server/.env` with your MongoDB Atlas connection string

**Port Already in Use:**
- Change `PORT` in `server/.env`
- The frontend now uses direct API calls (no proxy needed)

**Products Not Showing:**
- Run `npm run seed` to populate initial products
- Check backend is running on port 5000
- Check browser console for API errors
- Verify API calls to https://smarcart-api.onrender.com

## 📝 Next Steps

- Add real product images
- Implement admin panel
- Add payment integration
- Enhance UI/UX
