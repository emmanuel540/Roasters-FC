import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import Footer from './Footer';

export default function Layout() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamsDropdown, setTeamsDropdown] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', phone: '', team: 'u9' });
  const [registerSubmitted, setRegisterSubmitted] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerForm.name.trim() && registerForm.email.trim()) {
      setRegisterSubmitted(true);
      setRegisterForm({ name: '', email: '', phone: '', team: 'u9' });
      setTimeout(() => {
        setRegisterSubmitted(false);
        setShowRegister(false);
      }, 2000);
    }
  };

  return (
    <div className="page-shell">
      <nav className="topnav">
        <img src="/roasters-fc-logo.png" alt="Roasters FC Logo" className="brand-logo" />
        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
        <div className={`nav-links${menuOpen ? ' open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            About Us
          </NavLink>
          
          <div className="nav-dropdown">
            <button
              type="button"
              className="nav-dropdown-toggle"
              onClick={() => setTeamsDropdown(!teamsDropdown)}
              aria-expanded={teamsDropdown}
            >
              Teams
            </button>
            {teamsDropdown && (
              <div className="dropdown-menu">
                <NavLink to="/teams" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  All Teams
                </NavLink>
                <NavLink to="/teams/u9" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  U9 Team
                </NavLink>
                <NavLink to="/teams/u13" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  U13 Team
                </NavLink>
                <NavLink to="/teams/senior" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  Senior Team
                </NavLink>
                <NavLink to="/coaching-staff" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                  Coaching Staff
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/programs" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Programs
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Gallery
          </NavLink>
          <NavLink to="/fixtures" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Fixtures
          </NavLink>
          <NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            News
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : undefined)}>
            Contact
          </NavLink>
        </div>
        
        <button type="button" className="register-btn" onClick={() => setShowRegister(true)}>
          Register Now
        </button>
      </nav>

      <Outlet />

      {showLogin && <Login onClose={() => setShowLogin(false)} />}

      {showRegister && (
        <div className="register-modal-overlay" onClick={() => setShowRegister(false)}>
          <div className="register-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={() => setShowRegister(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h2>Register for Roasters FC</h2>
            <form onSubmit={handleRegisterSubmit} className="register-form">
              <label htmlFor="reg-name">Full Name *</label>
              <input
                id="reg-name"
                type="text"
                value={registerForm.name}
                onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                placeholder="Your name"
                required
              />

              <label htmlFor="reg-email">Email *</label>
              <input
                id="reg-email"
                type="email"
                value={registerForm.email}
                onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                placeholder="your@email.com"
                required
              />

              <label htmlFor="reg-phone">Phone Number</label>
              <input
                id="reg-phone"
                type="tel"
                value={registerForm.phone}
                onChange={(e) => setRegisterForm({ ...registerForm, phone: e.target.value })}
                placeholder="+254 7XX XXX XXX"
              />

              <label htmlFor="reg-team">Team Category</label>
              <select
                id="reg-team"
                value={registerForm.team}
                onChange={(e) => setRegisterForm({ ...registerForm, team: e.target.value })}
              >
                <option value="u9">U9 Team</option>
                <option value="u13">U13 Team</option>
                <option value="senior">Senior Team</option>
              </select>

              <button type="submit" className="button primary">Complete Registration</button>
              {registerSubmitted && <p className="success-text">✓ Registration received! We'll contact you soon.</p>}
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
