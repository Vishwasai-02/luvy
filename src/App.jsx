import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import ScrollToTop from './components/ScrollToTop';
import GlobalNotifications from './components/GlobalNotifications';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';

import MobileBottomNav from './components/MobileBottomNav';

function AppContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      {!isAuthPage && <Footer />}
      <MobileBottomNav />
    </div>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <WishlistProvider>
          <ScrollToTop />
          <AppContent />
          <GlobalNotifications />
        </WishlistProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
