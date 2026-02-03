import React, { useState } from 'react';

// Components
import ProductCard from '../components/ProductCard';

// Contexts
import { useSearch } from '../contexts/SearchContext';

// Data
import { products } from './products';

// Styles
import '../styles/Home.css';

const Home = () => {
  const { searchQuery } = useSearch(); 
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  
  const [filters, setFilters] = useState({
    priceRange: "All", brand: "All", sort: "Newest"
  });

  // Unique Categories from data
  const categoryList = ["All", ...new Set(products.map(p => p.category))];
  const allBrands = ["All", ...new Set(products.map(p => p.brand))];

  // --- FILTERING LOGIC ---
  const filteredProducts = products.filter(product => {
    // Search
    const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category
    const catMatch = selectedCategory === "All" || product.category === selectedCategory;
    
    // Filters
    const brandMatch = filters.brand === "All" || product.brand === filters.brand;
    
    let priceMatch = true;
    if (filters.priceRange === "Under 2000") priceMatch = product.price < 2000;
    if (filters.priceRange === "2000-20000") priceMatch = product.price >= 2000 && product.price <= 20000;
    if (filters.priceRange === "Above 20000") priceMatch = product.price > 20000;

    return searchMatch && catMatch && brandMatch && priceMatch;
  });

  const clearFilters = () => setFilters({ priceRange: "All", brand: "All", sort: "Newest" });

  return (
    <div className="home-container">
      {/* Hero */}
      <div className="hero-section">
        <div className="flying-rocket">🚀</div>
        <h1>FUTURE OF SHOPPING</h1>
        <p>Explore Genuine Products. Official Warranty.</p>
      </div>

      {/* Categories */}
      <div className="control-bar">
        <div className="category-scroll">
          <button className={`filter-btn ${selectedCategory === "All" ? 'active' : ''}`} onClick={() => setSelectedCategory("All")}>All</button>
          {categoryList.filter(c => c !== "All").map(cat => (
             <button key={cat} className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`} onClick={() => setSelectedCategory(cat)}>{cat}</button>
          ))}
        </div>
        <button className="toggle-filters-btn" onClick={() => setShowFilterMenu(!showFilterMenu)}><i className="fas fa-filter"></i> Filters</button>
      </div>

      {/* Filters */}
      {showFilterMenu && (
        <div className="filter-dropdown fade-in">
          <div className="filter-header"><h3>Refine Results</h3><button onClick={clearFilters} className="clear-btn">Clear All</button></div>
          <div className="filter-grid">
            <div className="filter-group"><label>Price</label><select value={filters.priceRange} onChange={(e) => setFilters({...filters, priceRange: e.target.value})}><option value="All">All Prices</option><option value="Under 2000">Under ₹2,000</option><option value="2000-20000">₹2,000 - ₹20,000</option><option value="Above 20000">Above ₹20,000</option></select></div>
            <div className="filter-group"><label>Brand</label><select value={filters.brand} onChange={(e) => setFilters({...filters, brand: e.target.value})}>{allBrands.map(b => <option key={b} value={b}>{b}</option>)}</select></div>
          </div>
        </div>
      )}

      {/* Results */}
      <h2 className="section-title">{selectedCategory === "All" ? "Trending Now" : selectedCategory} ({filteredProducts.length} Items)</h2>

      {filteredProducts.length === 0 ? (
        <div className="no-results"><h3>No products found</h3><button onClick={clearFilters}>Reset Filters</button></div>
      ) : (
        <div className="products-grid">
          {filteredProducts.slice(0, 50).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;