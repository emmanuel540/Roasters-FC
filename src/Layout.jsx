import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';

export default function Layout() {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : undefined)}>About</NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : undefined)}>Gallery</NavLink>
          <NavLink to="/coach" className={({ isActive }) => (isActive ? 'active' : undefined)}>Coach Profile</NavLink>
          <button type="button" className="link-button" onClick={() => setShowLogin(true)}>
            Login
          </button>
        </div>
      </nav>

      <Outlet />

      {showLogin && <Login onClose={() => setShowLogin(false)} />}
    </div>
  );
}
