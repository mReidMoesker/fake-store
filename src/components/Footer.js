import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Customer Support</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/help-centre">Help Centre</Link></li>
            <li><Link to="/returns">Returns & Exchanges</Link></li>
            <li><Link to="/gift-cards">Gift Cards</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/subscription">Subscription</Link></li>
            <li><Link to="/financing">Financing</Link></li>
            <li><Link to="/trade-in">Trade-In Program</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/company-info">Company Information</Link></li>
            <li><Link to="/community">In the Community</Link></li>
            <li><Link to="/newsroom">Newsroom</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Fake Store. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" className="facebook" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" className="instagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" className="twitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" className="youtube" arget="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;