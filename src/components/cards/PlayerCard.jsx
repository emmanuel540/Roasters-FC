export default function PlayerCard({ player }) {
  return (
    <article className="profile-card">
      <div className="profile-header">
        <span className="profile-number">#{player.number}</span>
        <h3>{player.name}</h3>
      </div>
      <p className="profile-position">{player.position}</p>
      <p>{player.description}</p>
    </article>
  );
}
