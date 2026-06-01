import { useState } from 'react';

const players = [
  { name: 'Mason Vale', position: 'Forward', number: 9, description: 'Prolific striker with a sharp eye for goal.' },
  { name: 'Jordan Kimutai', position: 'Midfielder', number: 8, description: 'Creative playmaker who controls the tempo.' },
  { name: 'Peter Omwami', position: 'Defender', number: 4, description: 'Reliable center-back with strong leadership.' }
];

const coach = {
  name: 'Emmanuel Kadenge', role: 'Founder' & 'Head Coach', experience: '7 seasons leading championship-challenged squads to victory.'
};

export default function Homepage() {
  const [donationAmount, setDonationAmount] = useState('25');
  const [donorName, setDonorName] = useState('');
  const [donationSubmitted, setDonationSubmitted] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleDonationSubmit = (event) => {
    event.preventDefault();
    if (!donorName.trim()) return;
    setDonationSubmitted(true);
    setDonorName('');
    setDonationAmount('25');
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginStatus('Please enter both email and password.');
      return;
    }
    setLoginStatus(`Welcome back, ${loginEmail.split('@')[0]}!`);
    setLoginEmail('');
    setLoginPassword('');
  };

  return (
    <div className="page-shell">
      <nav className="topnav">
        <img src="/roasters-fc-logo.png" alt="Roasters FC Logo" className="brand-logo" />
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#players">Player Profile</a>
          <a href="#coach">Coach Profile</a>
          <a href="#donate">Donation</a>
          <a href="#login">Login</a>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Welcome to Roasters FC</span>
          <h1>Where passion, pride, and matchday energy unite.</h1>
          <p>
            Roasters FC is a competitive football club built on teamwork, local spirit, and a bold vision for the future.
            Follow our season, meet the squad, and support the team on the path to victory.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#players">Meet the Squad</a>
            <a className="button secondary" href="#donate">Support the Club</a>
          </div>
        </div>
        <div className="hero-panel hero-team-card">
          <div>
            <h2>Next Fixture</h2>
            <p>Roasters FC vs. River City Rams</p>
            <strong>Saturday • 5:30 PM • Home Stadium</strong>
          </div>
        </div>
      </section>

      <section id="about" className="section section-about">
        <div className="section-header">
          <h2>About Roasters FC</h2>
          <p>
            Roasters FC is a community-first football club that blends athletic excellence with neighborhood pride.
            Our fans, players, and coaching staff share a single goal: build a club everyone can rally behind.
          </p>
        </div>
        <div className="feature-grid team-values">
          <article className="feature-card">
            <h3>Our Mission</h3>
            <p>Deliver thrilling football while fostering youth development and community engagement.</p>
          </article>
          <article className="feature-card">
            <h3>Club Culture</h3>
            <p>Driven by resilience, humility, and the support of every fan in the stands.</p>
          </article>
          <article className="feature-card">
            <h3>Fan Experience</h3>
            <p>Matchday excitement, club events, and exclusive access to behind-the-scenes stories.</p>
          </article>
        </div>
      </section>

      <section id="players" className="section section-profiles">
        <h2>Player Profile</h2>
        <div className="profile-grid">
          {players.map((player) => (
            <article key={player.name} className="profile-card">
              <div className="profile-header">
                <span className="profile-number">#{player.number}</span>
                <h3>{player.name}</h3>
              </div>
              <p className="profile-position">{player.position}</p>
              <p>{player.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="coach" className="section section-coach">
        <div className="coach-panel">
          <h2>Coach Profile</h2>
          <div className="coach-card">
            <div>
              <h3>{coach.name}</h3>
              <p className="coach-role">{coach.role}</p>
            </div>
            <p>{coach.experience}</p>
          </div>
        </div>
      </section>

      <section id="donate" className="section section-donate">
        <div className="section-header">
          <h2>Donation Form</h2>
          <p>Your support helps the club grow, train, and compete at a higher level.</p>
        </div>
        <form className="donation-form" onSubmit={handleDonationSubmit}>
          <label htmlFor="donor-name">Name</label>
          <input
            id="donor-name"
            type="text"
            value={donorName}
            onChange={(event) => setDonorName(event.target.value)}
            placeholder="Your name"
          />

          <label htmlFor="donation-amount">Donation amount</label>
          <select
            id="donation-amount"
            value={donationAmount}
            onChange={(event) => setDonationAmount(event.target.value)}
          >
            <option value="25">$25</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="250">$250</option>
          </select>

          <button type="submit" className="button primary">Donate now</button>
          {donationSubmitted && <p className="success-text">Thanks! Your support keeps Roasters FC moving forward.</p>}
        </form>
      </section>

      <section id="login" className="section section-login">
        <div className="section-header">
          <h2>Login</h2>
          <p>Access your account, buy tickets, and manage your club membership.</p>
        </div>
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            value={loginEmail}
            onChange={(event) => setLoginEmail(event.target.value)}
            placeholder="you@example.com"
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
            placeholder="Enter your password"
          />

          <button type="submit" className="button secondary">Login</button>
          {loginStatus && <p className="login-status">{loginStatus}</p>}
        </form>
      </section>
    </div>
  );
}
