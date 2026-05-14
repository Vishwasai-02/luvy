import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Phone, Edit, LogOut, Package, ChevronRight } from 'lucide-react';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      navigate('/auth?mode=login');
      return;
    }

    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setUser(JSON.parse(savedProfile));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.dispatchEvent(new Event('authChange'));
    navigate('/');
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  const dummyOrders = [
    { id: 'ORD-2025-081', date: 'Oct 15, 2025', status: 'Delivered', total: '$145.00' },
    { id: 'ORD-2025-104', date: 'Nov 02, 2025', status: 'Processing', total: '$89.99' }
  ];

  return (
    <div className="profile-page animate-fade-in">
      <div className="container" style={{ maxWidth: '800px', margin: '4rem auto', minHeight: '60vh' }}>
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>My Account</h1>
        
        <div className="profile-layout">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                {getInitials(user.name)}
              </div>
              <div className="profile-title-area">
                <h2>{user.name}</h2>
                <p>Premium Member</p>
              </div>
              <button className="edit-btn" title="Edit Profile">
                <Edit size={18} />
              </button>
            </div>
            
            <div className="profile-details">
              <div className="detail-item">
                <div className="detail-icon"><User size={18} /></div>
                <div className="detail-text">
                  <span className="detail-label">Full Name</span>
                  <span className="detail-value">{user.name}</span>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><Mail size={18} /></div>
                <div className="detail-text">
                  <span className="detail-label">Email Address</span>
                  <span className="detail-value">{user.email}</span>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon"><Phone size={18} /></div>
                <div className="detail-text">
                  <span className="detail-label">Phone Number</span>
                  <span className="detail-value">{user.phone}</span>
                </div>
              </div>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={18} />
              Logout
            </button>
          </div>

          {/* Orders Section */}
          <div className="orders-section">
            <div className="orders-header">
              <h3><Package size={20} style={{ marginRight: '0.5rem' }} /> Recent Orders</h3>
            </div>
            <div className="orders-list">
              {dummyOrders.map(order => (
                <div className="order-card" key={order.id}>
                  <div className="order-info">
                    <span className="order-id">{order.id}</span>
                    <span className="order-date">{order.date}</span>
                  </div>
                  <div className="order-status-total">
                    <span className={`order-status ${order.status.toLowerCase()}`}>{order.status}</span>
                    <span className="order-total">{order.total}</span>
                    <ChevronRight size={18} className="order-chevron" />
                  </div>
                </div>
              ))}
            </div>
            <button className="btn btn-outline" style={{ width: '100%', marginTop: '1rem', borderColor: 'var(--border-color)', color: 'var(--primary-navy)' }}>
              View All Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
