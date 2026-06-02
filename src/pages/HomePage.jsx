import { useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import PlayerCard from '../components/cards/PlayerCard';
import StaffCard from '../components/cards/StaffCard';
import { players, coach } from '../data/teams';

export default function HomePage() {
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
    <>
      <HeroSection />

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
            <PlayerCard key={player.name} player={player} />
          ))}
        </div>
      </section>

      <section id="coach" className="section section-coach">
        <div className="coach-panel">
          <h2>Coach Profile</h2>
          <StaffCard staff={coach} />
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
    </>
  );
}
