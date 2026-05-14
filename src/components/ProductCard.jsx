import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ShoppingBag, Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [feedback, setFeedback] = useState('');

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={product.image} alt={product.name} className="product-img" />
        {product.isBestSeller && <span className="product-badge">Best Seller</span>}
        <button 
          className={`wishlist-btn ${isInWishlist(product.id) ? 'in-wishlist' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
        >
          <Heart size={18} fill={isInWishlist(product.id) ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="product-info">
        <div style={{color: 'var(--text-dark)', fontSize: '0.85rem', marginBottom: '0.5rem'}}>{product.category}</div>
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">₹{product.price.toFixed(2)}</p>
        <button 
          className="btn btn-primary mt-auto" 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
            setFeedback('Item added to cart');
            setTimeout(() => setFeedback(''), 3000);
          }}
          style={{ fontSize: '0.85rem', padding: '0.625rem 1.25rem' }}
        >
          Add to Cart
        </button>
        {feedback && (
          <p style={{ color: 'var(--primary-navy)', fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 'bold', textAlign: 'center' }}>
            ✓ {feedback}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
