import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Heart, ShoppingBag } from 'lucide-react';
import './ProductGrid.css';

const ProductGrid = ({ title, products, showAll = false }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Show only first 3 products unless showAll is true
  const displayProducts = showAll ? products : products.slice(0, 3);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart(product);
    setFeedbackMessage('Item added to cart');
    
    // Clear feedback message after 2 seconds
    setTimeout(() => {
      setFeedbackMessage('');
    }, 2000);
  };

  return (
    <section className="product-grid-section py-section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        
        <div className="product-grid">
          {displayProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-grid-card"
            >
              <div className="product-grid-img-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-grid-img"
                />
                <button 
                  className={`wishlist-btn ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                >
                  <Heart size={20} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
              
              <div className="product-grid-info">
                <h3 className="product-grid-title">{product.name}</h3>
                <p className="product-grid-category">{product.category}</p>
                <p className="product-grid-price">₹{product.price.toFixed(2)}</p>
                
                <button 
                  className="product-grid-btn"
                  onClick={(e) => handleAddToCart(product, e)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {feedbackMessage && (
          <div className="feedback-message">
            {feedbackMessage}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
