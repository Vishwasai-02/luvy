import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [filter, setFilter] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setFilter(categoryParam);
    } else {
      setFilter('All');
    }
  }, [location]);

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="shop-page container py-section animate-fade-in">
      <h1 className="section-title">Shop Our Collection</h1>
      
      <div className="filter-bar" style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap', padding: '0 1rem' }}>
        <button 
          className={`btn ${filter === 'All' ? 'btn-primary' : 'btn-outline'}`}
          onClick={() => setFilter('All')}
          style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
        >
          All
        </button>
        {categories.map(cat => (
          <button 
            key={cat.name}
            className={`btn ${filter === cat.name ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setFilter(cat.name)}
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4" style={{ padding: '0 1rem' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <div style={{ gridColumn: 'span 4', textAlign: 'center', padding: '3rem' }}>
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
