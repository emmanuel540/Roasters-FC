export default function FixturesPage() {
  const fixtures = [
    {
      id: 1,
      opponent: 'Nairobi Juniors',
      date: 'Saturday, June 8',
      time: '3:00 PM',
      type: 'Upcoming',
      status: 'Scheduled'
    },
    {
      id: 2,
      opponent: 'Valley United',
      date: 'Saturday, June 15',
      time: '2:30 PM',
      type: 'Upcoming',
      status: 'Scheduled'
    },
    {
      id: 3,
      opponent: 'Eastside FC',
      date: 'Saturday, June 1',
      time: '4:00 PM',
      type: 'Result',
      status: 'Won 2-1'
    }
  ];

  return (
    <section className="section section-fixtures">
      <div className="section-header">
        <h2>Fixtures & Results</h2>
        <p>Stay updated with upcoming matches and past results.</p>
      </div>
      <div className="fixtures-grid">
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
