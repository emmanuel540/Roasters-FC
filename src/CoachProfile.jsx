import { coachingStaff } from './data/teamData';

export default function CoachProfile() {
  return (
    <section className="section section-coach">
      <div className="section-header">
        <h2>Coaching Staff</h2>
        <p>Meet the people behind the strategy, training, and matchday preparation at Roasters FC.</p>
      </div>
      <div className="coach-panel">
        {coachingStaff.map((member) => (
          <div key={member.name} className="coach-card">
            <div>
              <h3>{member.name}</h3>
              <p className="coach-role">{member.role}</p>
            </div>
            <p>{member.experience}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
