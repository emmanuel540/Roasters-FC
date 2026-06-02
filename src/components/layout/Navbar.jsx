export default function Navbar() {
  return (
    <nav className="topnav">
      <img src="/roasters-logo.png" alt="Roasters FC Logo" className="brand-logo" />
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#players">Player Profile</a>
        <a href="#coach">Coach Profile</a>
        <a href="#donate">Donation</a>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
}
