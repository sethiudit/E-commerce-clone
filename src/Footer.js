import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='footer'>
      <footer>
        <div className="container">
          <Link to='/'>
            <div className='backtohome'>back to home page</div>
          </Link>
          <div className="back-to-top" onClick={scrollToTop}>
            Back to Top
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to='/about' className="footer-link">About Us</Link></li>
                <li><Link to='/services' className="footer-link">Services</Link></li>
                <li><Link to='/contact' className="footer-link">Contact Us</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect With Us</h3>
              <ul>
                <li><a href="https://facebook.com" className="footer-link">Facebook</a></li>
                <li><a href="https://twitter.com" className="footer-link">Twitter</a></li>
                <li><a href="https://instagram.com" className="footer-link">Instagram</a></li>
              </ul>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        
        </div>
      </footer>
    </div>
  )
}

export default Footer
