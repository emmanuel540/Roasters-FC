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
            <img 
              src={`https://via.placeholder.com/200?text=${member.name.replace(/\s/g, '+')}`}
              alt={member.name}
              className="profile-image"
            />
            <div className="profile-header">
              <h3>{member.name}</h3>
            </div>
            <p className="profile-position">{member.role}</p>
            <p>{member.experience}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
