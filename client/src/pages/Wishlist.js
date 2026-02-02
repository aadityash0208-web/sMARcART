import React from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import ProductCard from '../components/ProductCard';
import '../styles/Home.css'; 

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="home-container" style={{padding: '50px 10%'}}>
      <h1 style={{textAlign: 'center', marginBottom: '40px'}}>Your Wishlist ❤️</h1>
      
      {wishlist.length === 0 ? (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <h2>It's empty here!</h2>
          <p>Go find something you love.</p>
        </div>
      ) : (
        <div className="products-grid">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;