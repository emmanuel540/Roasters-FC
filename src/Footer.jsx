import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-branding">
            <img src="/roasters-fc-logo.png" alt="Roasters FC Logo" className="footer-logo" />
            <h3>Roasters FC</h3>
            <p>Building champions, nurturing futures.</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/teams">Teams</Link>
            <Link to="/programs">Programs</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/fixtures">Fixtures</Link>
            <Link to="/news">News</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WhatsApp</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe for the latest updates and news from Roasters FC.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="your@email.com" />
            <button className="button primary">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <p>&copy; {currentYear} Roasters FC. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <a href="#">Child Protection Policy</a>
          </div>
        </div>
        <div className="footer-fund">
          <p><strong>Roasters FC Development Fund</strong> - Supporting youth football excellence and community development.</p>
        </div>
      </div>
    </footer>
  );
}
