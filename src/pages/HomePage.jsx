import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow">Welcome to Roasters FC</span>
          <h1>Where passion, pride, and matchday energy unite.</h1>
          <p>
            Roasters FC is a competitive football club built on teamwork, local spirit, and a bold vision for the future.
            Follow our season, meet the squad, and support the team on the path to victory.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/squad">Meet the Squad</Link>
            <Link className="button primary" to="/be-apart-us">Be Apart Of Us</Link>
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

      <section className="section section-about">
        <div className="section-header">
          <h2>About Roasters FC</h2>
          <p>
            A community-first football club that blends athletic excellence with neighborhood pride.
            Our fans, players, and coaching staff share a single goal: build a club everyone can rally behind.
          </p>
          <Link className="button primary" to="/about">Learn More</Link>
        </div>
      </section>
    </>
  );
}
