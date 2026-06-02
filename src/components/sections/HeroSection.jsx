export default function HeroSection() {
  return (
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
          <strong>Saturday &bull; 5:30 PM &bull; Home Stadium</strong>
        </div>
      </div>
    </section>
  );
}
