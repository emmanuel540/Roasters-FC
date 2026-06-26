import { useState, useEffect } from 'react';
import emmanuelImg from '../data/Coaching Staff/Emmanuel Kadenge - Founder & Head Coach.jpeg';
import victoriaImg from '../data/Coaching Staff/Victoria Kasyoka - Assistant Coach.jpeg';
import reinhardImg from '../data/Coaching Staff/Reinhard Mutiso - Assistant Coach.jpeg';
import derrickImg from '../data/Coaching Staff/Derrick Amboka - Goalkeeping Coach.jpeg';
import alsonImg from '../data/Coaching Staff/Alson Angaluki - Defending & Midfield Coach.jpeg';
import stanclousImg from '../data/Coaching Staff/Stanclous Lwaki - Team Secretary.jpeg';
import felixImg from '../data/Coaching Staff/Felix Achira - Technical Analyst.jpeg';

const coachImageMap = {
  'Emmanuel Kadenge': emmanuelImg,
  'Victoria Kasyoka': victoriaImg,
  'Reinhard Mutiso': reinhardImg,
  'Derrick Amboka': derrickImg,
  'Alson Angaluki': alsonImg,
  'Stanclous Lwaki': stanclousImg,
  'Felix Achira': felixImg
};

export default function CoachProfile() {
  const [coachingStaff, setCoachingStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/coaching-staff')
      .then((res) => res.json())
      .then((data) => {
        setCoachingStaff(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching coaching staff:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="section section-coach">
      <div className="section-header">
        <h2>Coaching Staff</h2>
        <p>Meet the people behind the strategy, training, and matchday preparation at Roasters FC.</p>
      </div>
      <div className="profile-grid">
        {loading && <p>Loading coaching staff...</p>}
        {!loading && coachingStaff.length === 0 && <p>No coaching staff profiles available.</p>}
        {coachingStaff.map((member) => (
          <article key={member.name} className="profile-card">
            <div className="profile-header-stacked">
              <h3>{member.name}</h3>
              <p className="profile-position">{member.role}</p>
            </div>
            <img 
              src={coachImageMap[member.name] || 'https://via.placeholder.com/200'}
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

