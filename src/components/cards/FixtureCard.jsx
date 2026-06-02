export default function FixtureCard({ fixture }) {
  return (
    <article className="fixture-card">
      <h3>{fixture.home} vs {fixture.away}</h3>
      <p>{fixture.date} &bull; {fixture.time} &bull; {fixture.venue}</p>
    </article>
  );
}
