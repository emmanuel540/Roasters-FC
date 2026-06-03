import { Link } from 'react-router-dom';
import { categories } from './data/teamData';

export default function SquadPage() {
  return (
    <section className="section section-squad">
      <div className="section-header">
        <h2>Meet the Squad</h2>
        <p>Choose a category to view player profiles for that team.</p>
      </div>

      <div className="profile-grid">
        <article className="profile-card">
          <h3>Coaching Staff</h3>
          <p>Meet the coaches and staff who shape our teams on and off the pitch.</p>
          <Link className="button secondary" to="/coaching-staff">View Coaches</Link>
        </article>
        {categories.map((cat) => (
          <article key={cat.id} className="profile-card">
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
            <Link className="button primary" to={`/teams/${cat.id}`}>View Players</Link>
          </article>
        ))}
      </div>
    </section>
  );
}
