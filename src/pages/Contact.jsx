// import React, { useState } from 'react';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const Contact = () => {
//   const [formStatus, setFormStatus] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormStatus('Thank you for your message. We will get back to you shortly.');
//     e.target.reset();
//   };

//   return (
//     <>
//       {/* Hero Banner Section */}
//       <section className="contact-hero">
//         <div className="contact-hero-overlay"></div>
//         <div className="contact-hero-content">
//           <h1 className="contact-hero-title">Contact Us</h1>
//         </div>
//       </section>

//       <div className="contact-page container py-section animate-fade-in">
//         <div className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>
//           <h1>Get in Touch</h1>
//           <p style={{ color: 'var(--text-dark)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
//             We'd love to hear from you. Please fill out the form below or reach out to us directly.
//           </p>
//         </div>

//       <div className="grid grid-cols-2" style={{ gap: '4rem' }}>
//         <div className="contact-info" style={{ backgroundColor: 'var(--primary-navy)', color: 'var(--bg-white)', padding: '3rem', borderRadius: '8px' }}>
//           <h2 style={{ color: 'var(--accent-turquoise)', marginBottom: '2rem', fontSize: '1.8rem' }}>AURA Contact Info</h2>
          
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
//             <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
//                <MapPin size={24} color="var(--accent-turquoise)" />
//                <div>
//                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--bg-white)' }}>Our Store</h3>
//                  <p style={{ color: 'var(--text-light)' }}>123 Fashion Avenue<br/>New York, NY 10001<br/>United States</p>
//                </div>
//             </div>
            
//             <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
//                <Phone size={24} color="var(--accent-turquoise)" />
//                <div>
//                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--bg-white)' }}>Phone Number</h3>
//                  <p style={{ color: 'var(--text-light)' }}>+1 (555) 123-4567<br/>Mon-Fri, 9am - 6pm EST</p>
//                </div>
//             </div>

//             <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
//                <Mail size={24} color="var(--accent-turquoise)" />
//                <div>
//                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--bg-white)' }}>Email Address</h3>
//                  <p style={{ color: 'var(--text-light)' }}>support@aurafashion.com<br/>sales@aurafashion.com</p>
//                </div>
//             </div>
//           </div>

//           <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--secondary-navy)' }}>
//             <h3 style={{ color: 'var(--bg-white)', marginBottom: '1rem' }}>About Our Products</h3>
//             <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
//               At AURA, we specialize in high-end, premium quality women's jewellery and handbags. Our jewellery pieces are handcrafted by seasoned artisans using ethically sourced gemstones, whilst our handbags are fashioned from the finest imported leathers designed to age beautifully.
//             </p>
//           </div>
//         </div>

//         <div className="contact-form-wrapper" style={{ backgroundColor: 'var(--bg-white)', padding: '3rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
//           <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Send Us a Message</h2>
          
//           {formStatus && (
//             <div style={{ padding: '1rem', backgroundColor: '#e6ffe6', color: '#006600', borderRadius: '4px', marginBottom: '2rem' }}>
//               {formStatus}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Your Name</label>
//               <input type="text" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none' }} />
//             </div>
            
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email Address</label>
//               <input type="email" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none' }} />
//             </div>
            
//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Subject</label>
//               <input type="text" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none' }} />
//             </div>

//             <div>
//               <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
//               <textarea rows="5" required style={{ width: '100%', padding: '0.8rem', borderRadius: '4px', border: '1px solid var(--border-color)', outline: 'none' }}></textarea>
//             </div>

//             <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Send Message</button>
//           </form>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Contact;



import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div style={{ 
      backgroundColor: '#F8F9FA',
      minHeight: '100vh',
      padding: '60px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{
            fontSize: '12px',
            letterSpacing: '3px',
            color: '#c9a96e',
            marginBottom: '16px',
            textTransform: 'uppercase'
          }}>
            WE'D LOVE TO HEAR FROM YOU
          </p>
          
          <h1 style={{ 
            fontSize: '48px',
            color: '#1a1a1a',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Contact Us
          </h1>
          
          <p style={{
            fontSize: '16px',
            color: '#777',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Have questions about our jewelry, orders, or services? Our dedicated team is here to assist you.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="contact-container" style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'stretch',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          
          {/* Left Side - Contact Form */}
          <div className="contact-form-container" style={{ flex: '1' }}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
              maxWidth: '550px'
            }}>
              <h2 style={{
                fontSize: '24px',
                color: '#2BB7A6',
                marginBottom: '30px',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit}>
                {/* Name */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1a1a1a'
                  }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      backgroundColor: '#fafafa',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#c9a96e';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#eee';
                      e.target.style.backgroundColor = '#fafafa';
                    }}
                  />
                </div>

                {/* Email */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1a1a1a'
                  }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      backgroundColor: '#fafafa',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#c9a96e';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#eee';
                      e.target.style.backgroundColor = '#fafafa';
                    }}
                  />
                </div>

                {/* Phone */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1a1a1a'
                  }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      backgroundColor: '#fafafa',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#c9a96e';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#eee';
                      e.target.style.backgroundColor = '#fafafa';
                    }}
                  />
                </div>

                {/* Subject */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1a1a1a'
                  }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can we help?"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      backgroundColor: '#fafafa',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#c9a96e';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#eee';
                      e.target.style.backgroundColor = '#fafafa';
                    }}
                  />
                </div>

                {/* Message */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#1a1a1a'
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                    rows="5"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      border: '1px solid #eee',
                      backgroundColor: '#fafafa',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box',
                      transition: 'all 0.3s ease'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#c9a96e';
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#eee';
                      e.target.style.backgroundColor = '#fafafa';
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div style={{ textAlign: 'center' }}>
                  <button
                    type="submit"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: '500',
                      padding: '1rem 2.5rem',
                      borderRadius: '30px',
                      fontSize: '1.1rem',
                      background: 'linear-gradient(90deg, #1c3d6e 0%, #2bb6a8 100%)',
                      color: '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                      letterSpacing: '1px',
                      boxShadow: '0 8px 20px rgba(43, 182, 168, 0.3)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 12px 25px rgba(43, 182, 168, 0.5)';
                      e.target.style.background = 'linear-gradient(90deg, #2bb6a8 0%, #1c3d6e 100%)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 20px rgba(43, 182, 168, 0.3)';
                      e.target.style.background = 'linear-gradient(90deg, #1c3d6e 0%, #2bb6a8 100%)';
                    }}
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Side - Get in Touch */}
          <div className="contact-info-container" style={{ flex: '0.8' }}>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
              maxWidth: '420px'
            }}>
              <h2 style={{
                fontSize: '24px',
                color: '#2BB7A6',
                marginBottom: '30px',
                fontWeight: '600',
                textAlign: 'center'
              }}>
                GET IN TOUCH
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                {/* Email */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '20px',
                  backgroundColor: '#F8F9FA',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }} onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }} onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#2BB7A6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ color: 'white', fontSize: '18px' }}>✉️</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: '#1a1a1a', fontWeight: '600', marginBottom: '4px' }}>Email Us</div>
                    <div style={{ fontSize: '14px', color: '#777' }}>support@luxejewels.com</div>
                  </div>
                </div>
                
                {/* Phone */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '20px',
                  backgroundColor: '#F8F9FA',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }} onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }} onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#2BB7A6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ color: 'white', fontSize: '18px' }}>📞</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: '#1a1a1a', fontWeight: '600', marginBottom: '4px' }}>Call Us</div>
                    <div style={{ fontSize: '14px', color: '#777' }}>+91 98765 43210</div>
                  </div>
                </div>
                
                {/* Address */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '20px',
                  backgroundColor: '#F8F9FA',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease'
                }} onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                }} onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#2BB7A6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <span style={{ color: 'white', fontSize: '18px' }}>📍</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: '#1a1a1a', fontWeight: '600', marginBottom: '4px' }}>Visit Us</div>
                    <div style={{ fontSize: '14px', color: '#777' }}>123, Luxury Avenue, Hyderabad, Telangana</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div style={{
              marginTop: '30px',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
              maxWidth: '420px',
              height: '320px',
              border: '1px solid #eee'
            }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121825.8672535798!2d78.3670678!3d17.4121531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2f5%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1715705354964!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Luxe Jewels Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;