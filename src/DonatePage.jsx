import { useState } from 'react';

const supportTypes = ['Club Membership', 'Equipment Support', 'Training Sponsor', 'Community Partner'];

export default function DonatePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [supportType, setSupportType] = useState(supportTypes[0]);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setSupportType(supportTypes[0]);
    setMessage('');
  };

  return (
    <section className="section section-donate">
      <div className="section-header">
        <h2>Be Apart Of Us</h2>
        <p>Join Roasters FC as a supporter, sponsor, or member and help us grow across every age group.</p>
      </div>
      <form className="donation-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
        />

        <label htmlFor="support-type">Support type</label>
        <select
          id="support-type"
          value={supportType}
          onChange={(event) => setSupportType(event.target.value)}
        >
          {supportTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us how you want to help the club"
          rows="4"
        />

        <button type="submit" className="button primary">Be Apart Of Us</button>
        {submitted && <p className="success-text">Thanks! We’ll be in touch soon.</p>}
      </form>
    </section>
  );
}
