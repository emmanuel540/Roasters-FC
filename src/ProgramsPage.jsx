export default function ProgramsPage() {
  const programs = [
    {
      id: 'football-dev',
      title: 'Football Development',
      description: 'Core training focused on fundamental football skills, tactics, and match preparation for all age groups.'
    },
    {
      id: 'goalkeeper',
      title: 'Goalkeeper Training',
      description: 'Specialized coaching for goalkeepers including distribution, shot-stopping, and positioning drills.'
    },
    {
      id: 'fitness',
      title: 'Fitness & Conditioning',
      description: 'Physical development program to build strength, endurance, and athletic performance.'
    },
    {
      id: 'mentorship',
      title: 'Academic Mentorship',
      description: 'Support for players to balance education with football, ensuring long-term success both on and off the pitch.'
    },
    {
      id: 'leadership',
      title: 'Leadership Training',
      description: 'Develop leadership qualities, team communication, and decision-making skills for emerging team leaders.'
    },
    {
      id: 'scouting',
      title: 'Talent Scouting',
      description: 'Identification and development of emerging talents within the club and from partner organizations.'
    }
  ];

  return (
    <section className="section section-programs">
      <div className="section-header">
        <h2>Our Programs</h2>
        <p>Comprehensive training and development programs designed to nurture football talent and personal growth.</p>
      </div>
      <div className="programs-grid">
        {programs.map((program) => (
          <div key={program.id} className="program-card">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
