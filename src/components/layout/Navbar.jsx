import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={() => setMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/coach" className={({ isActive }) => (isActive ? 'active' : undefined)} onClick={() => setMenuOpen(false)}>Coach Profile</NavLink>
          <button type="button" className="link-button" onClick={() => { setShowLogin(true); setMenuOpen(false); }}>
            Login
          </button>
        </div>
      </nav>

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}
