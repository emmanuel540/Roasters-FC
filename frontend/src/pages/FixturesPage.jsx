import { useState, useEffect } from 'react';

export default function FixturesPage() {
  const [fixtures, setFixtures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/fixtures')
      .then((res) => res.json())
      .then((data) => {
        setFixtures(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching fixtures:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section section-fixtures">
      <div className="section-header">
        <h2>Fixtures & Results</h2>
        <p>Stay updated with upcoming matches and past results.</p>
      </div>
      <div className="fixtures-grid">
        {loading && <p>Loading fixtures...</p>}
        {!loading && fixtures.length === 0 && <p>No fixtures scheduled at the moment.</p>}
        {fixtures.map((fixture) => (
          <div key={fixture.id} className="fixture-card">
            <div className="fixture-header">
              <span className={`fixture-badge ${fixture.type.toLowerCase()}`}>{fixture.type}</span>
              <span className="fixture-status">{fixture.status}</span>
            </div>
            <h3>Roasters FC vs {fixture.opponent}</h3>
            <p className="fixture-date">{fixture.date}</p>
            <p className="fixture-time">{fixture.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
