import { coach } from './data/teamData';

export default function CoachProfile() {
  return (
    <section className="section section-coach">
      <div className="section-header">
        <h2>Coach Profile</h2>
        <p>Learn more about the coach guiding Roasters FC through every season.</p>
      </div>
      <div className="coach-panel">
        <div className="coach-card">
          <div>
            <h3>{coach.name}</h3>
            <p className="coach-role">{coach.role}</p>
          </div>
          <p>{coach.experience}</p>
        </div>
      </div>
    </section>
  );
}
