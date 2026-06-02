import { useParams, Link } from 'react-router-dom';
import { categories, playersByCategory } from './data/teamData';

const categoryLabel = {
  senior: 'Senior Team',
  u13: 'Under-13 Team',
  u9: 'Under-9 Team'
};

export default function PlayerProfile() {
  const { category } = useParams();
  const players = playersByCategory[category] || [];
  const title = categoryLabel[category] || 'Players';
  const selectedCategory = categories.find((cat) => cat.id === category);

  return (
    <section className="section section-profiles">
      <div className="section-header">
        <h2>{title}</h2>
        <p>{selectedCategory?.description || 'Meet the players for the selected category.'}</p>
        <Link className="button secondary" to="/squad">Back to squad categories</Link>
      </div>
      <div className="profile-grid">
        {players.length === 0 && <p>No players found for this category yet.</p>}
        {players.map((player) => (
          <article key={player.name} className="profile-card">
            <div className="profile-header">
              <span className="profile-number">#{player.number}</span>
              <h3>{player.name}</h3>
            </div>
            <p className="profile-position">{player.position}</p>
            <p>{player.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
