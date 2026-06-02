import { useState } from 'react';

export default function Login({ onClose }) {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

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
    <div className="login-modal-overlay" onClick={onClose}>
      <div className="login-modal" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="close-button" onClick={onClose} aria-label="Close login modal">
          ×
        </button>
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
      </div>
    </div>
  );
}
