export default function AboutPage() {
  return (
    <section className="section section-about">
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

      <div className="founder-section">
        <h2>Founder & Vision</h2>
        <div className="founder-profile">
          <img 
            src="https://via.placeholder.com/300?text=Emmanuel+Kadenge" 
            alt="Emmanuel Kadenge, Founder & Head Coach" 
            className="founder-image"
          />
          <div className="founder-info">
            <h3>Emmanuel Kadenge</h3>
            <p className="founder-role">Founder & Head Coach</p>
            <p className="founder-bio">
              Emmanuel Kadenge founded Roasters FC with a vision to create a world-class football development program
              rooted in community values. With over 7 seasons of coaching experience, Emmanuel has guided multiple squads
              to championship victories while maintaining a deep commitment to youth talent development.
            </p>
            <p>
              His philosophy centers on building not just better footballers, but better people. Under his leadership,
              Roasters FC has become a beacon for aspiring young players seeking professional development with a personal touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
