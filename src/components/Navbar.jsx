import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ShoppingCart, Search, User, Menu, X, LogIn, UserPlus, Package, Heart } from 'lucide-react';

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  
  const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{"name":""}');
  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  useEffect(() => {
    const handleAuthChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('authChange', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setIsProfileDropdownOpen(false);
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
      setSearchQuery('');
    }
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-left">
          <Link to="/" className="nav-brand">
            <img src={logo} alt="Luvy Logo" className="navbar-logo" />
            <span>LUVY</span>
          </Link>

          <form className="search-bar" onSubmit={handleSearch}>
            <Search size={18} color="var(--text-dark)" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>

        <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>

        <div className={`nav-links-container ${isMenuOpen ? 'mobile-open' : ''}`}>
          <div className="drawer-header">
            <div className="drawer-brand">
              <img src={logo} alt="Luvy Logo" className="navbar-logo" />
              <span>LUVY</span>
            </div>
            <button className="drawer-close-btn" onClick={() => setIsMenuOpen(false)}>
              <X size={24} color="#fff" />
            </button>
          </div>
          
          <ul className="nav-links">
            <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/shop" className="nav-link" onClick={() => setIsMenuOpen(false)}>Shop</Link></li>
            <li><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>

        <div className="nav-actions">
          <div className="profile-menu-container" style={{ position: 'relative' }} ref={dropdownRef}>
            <button 
              className="profile-avatar-btn" 
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              {isLoggedIn ? getInitials(userProfile.name) : <User size={20} />}
            </button>
            
            {isProfileDropdownOpen && (
              <div className="profile-dropdown animate-fade-in">
                {isLoggedIn ? (
                  <>
                    <div className="dropdown-header">
                      <strong>{userProfile.name || 'User'}</strong>
                      <span>Premium Member</span>
                    </div>
                    <ul className="dropdown-links">
                      <li>
                        <button onClick={() => { navigate('/profile'); setIsProfileDropdownOpen(false); }}>
                          <User size={16} /> My Profile
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { navigate('/profile?tab=orders'); setIsProfileDropdownOpen(false); }}>
                          <Package size={16} /> My Orders
                        </button>
                      </li>
                      <li>
                        <button onClick={handleLogout} className="logout-text">
                          <LogIn size={16} /> Logout
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <div className="dropdown-header">
                      <strong>Welcome</strong>
                      <span>Sign in to your account</span>
                    </div>
                    <ul className="dropdown-links">
                      <li>
                        <button onClick={() => { navigate('/auth?mode=login'); setIsProfileDropdownOpen(false); }}>
                          <LogIn size={16} /> Sign In
                        </button>
                      </li>
                      <li>
                        <button onClick={() => { navigate('/auth?mode=signup'); setIsProfileDropdownOpen(false); }}>
                          <UserPlus size={16} /> Sign Up
                        </button>
                      </li>
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>

          <Link to="/wishlist" className="wishlist-icon-wrapper">
            <Heart size={24} />
            {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
          </Link>

          <Link to="/cart" className="cart-icon-wrapper">
            <ShoppingCart size={24} />
            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
          </Link>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} color="#fff" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
