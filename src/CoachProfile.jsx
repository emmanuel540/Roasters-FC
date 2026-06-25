import { coachingStaff } from './data/teamData';

export default function CoachProfile() {
  return (
    <section className="section section-coach">
      <div className="section-header">
        <h2>Coaching Staff</h2>
        <p>Meet the people behind the strategy, training, and matchday preparation at Roasters FC.</p>
      </div>
      <div className="profile-grid">
        {coachingStaff.map((member) => (
          <article key={member.name} className="profile-card">
            <div className="profile-header-stacked">
              <h3>{member.name}</h3>
              <p className="profile-position">{member.role}</p>
            </div>
            <img 
              src={member.image}
              alt={member.name}
              className="profile-image"
              style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
            />
            <p className="profile-experience">{member.experience}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

