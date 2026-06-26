export default function NewsPage() {
  return (
    <section className="section section-news">
      <div className="section-header">
        <h2>News & Updates</h2>
        <p>Latest news and community updates from Roasters FC.</p>
      </div>
      
      <div className="news-content">
        <div className="news-card">
          <h3>Join Our WhatsApp Community</h3>
          <p>Stay connected with the latest updates, match schedules, and important announcements from Roasters FC.</p>
          <a 
            href="https://chat.whatsapp.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button primary"
          >
            Join WhatsApp Group
          </a>
        </div>

        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-item">
            <h4>How do I register my child?</h4>
            <p>You can register through our Register Now button or contact us directly via the contact form or WhatsApp.</p>
          </div>
          <div className="faq-item">
            <h4>What age groups do you have?</h4>
            <p>We have three main categories: U9, U13, and Senior teams. Check our Teams section for more details.</p>
          </div>
          <div className="faq-item">
            <h4>When are training sessions?</h4>
            <p>Training schedules vary by age group. Contact us for specific schedules for your desired category.</p>
          </div>
          <div className="faq-item">
            <h4>What is the registration fee?</h4>
            <p>Please reach out to us directly via WhatsApp or contact form for current pricing and membership options.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
