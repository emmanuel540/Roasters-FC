import { useState } from 'react';
import Modal from './Modal';

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

    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: loginEmail, password: loginPassword })
    })
    .then((res) => {
      if (!res.ok) {
        return res.json().then((data) => { throw new Error(data.error || 'Login failed') });
      }
      return res.json();
    })
    .then((data) => {
      setLoginStatus(data.message);
      setLoginEmail('');
      setLoginPassword('');
      // Delay closing slightly so user sees welcome message
      setTimeout(() => {
        onClose();
      }, 1500);
    })
    .catch((err) => {
      console.error('Error logging in:', err);
      setLoginStatus(err.message || 'Network error. Failed to log in.');
    });
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
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
    </Modal>
  );
}
