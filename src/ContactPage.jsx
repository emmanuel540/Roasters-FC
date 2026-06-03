import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="section section-contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Have questions? Want to join Roasters FC? We'd love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <h3>Phone</h3>
            <p><a href="tel:+254700000000">+254 700 000 000</a></p>
          </div>

          <div className="info-card">
            <h3>Email</h3>
            <p><a href="mailto:info@roastersfc.com">info@roastersfc.com</a></p>
          </div>

          <div className="info-card">
            <h3>WhatsApp</h3>
            <p>
              <a 
                href="https://wa.me/254700000000" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Chat with us on WhatsApp
              </a>
            </p>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Training Ground Address</p>
            <p className="location-details">Roasters FC Academy<br />Nairobi, Kenya</p>
          </div>

          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="socials">
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a Message</h3>

          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="your@email.com"
            required
          />

          <label htmlFor="phone">Phone (Optional)</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+254 7XX XXX XXX"
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell us how we can help..."
            rows="5"
          />

          <button type="submit" className="button primary">Send Message</button>
          {submitted && <p className="success-text">Thanks! We'll get back to you soon.</p>}
        </form>
      </div>
    </section>
  );
}
