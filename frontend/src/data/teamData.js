import emmanuelImg from './Coaching Staff/Emmanuel Kadenge - Founder & Head Coach.jpeg';
import victoriaImg from './Coaching Staff/Victoria Kasyoka - Assistant Coach.jpeg';
import reinhardImg from './Coaching Staff/Reinhard Mutiso - Assistant Coach.jpeg';
import derrickImg from './Coaching Staff/Derrick Amboka - Goalkeeping Coach.jpeg';
import alsonImg from './Coaching Staff/Alson Angaluki - Defending & Midfield Coach.jpeg';
import stanclousImg from './Coaching Staff/Stanclous Lwaki - Team Secretary.jpeg';
import felixImg from './Coaching Staff/Felix Achira - Technical Analyst.jpeg';

export const categories = [
  {
    id: 'senior',
    title: 'Senior Team',
    description: 'Our first team of experienced players competing at the highest club level.'
  },
  {
    id: 'u13',
    title: 'Under-13 Team',
    description: 'Developing young talent with energy, teamwork, and coaching support.'
  },
  {
    id: 'u9',
    title: 'Under-9 Team',
    description: 'Foundational training for the club’s youngest football stars.'
  }
];

export const playersByCategory = {
  senior: [
    { name: 'Mason Vale', position: 'Forward', number: 9, description: 'Prolific striker with a sharp eye for goal.' },
    { name: 'Peter Omwami', position: 'Defender', number: 4, description: 'Reliable center-back with strong leadership.' },
    { name: 'Bryan Kibet', position: 'Midfielder', number: 6, description: 'Box-to-box midfielder with excellent passing range.' }
  ],
  u13: [
    { name: 'Junior Otieno', position: 'Midfielder', number: 12, description: 'Energetic youth midfielder with great vision.' },
    { name: 'Sammy Njoroge', position: 'Forward', number: 7, description: 'Promising young striker with a fast first step.' },
    { name: 'Noah Mwangi', position: 'Defender', number: 2, description: 'Calm and composed young fullback with strong tackling.' }
  ],
  u9: [
    { name: 'Little Alex', position: 'Attacker', number: 3, description: 'Up-and-coming youngster full of energy and joy.' },
    { name: 'Emma Achieng', position: 'Midfielder', number: 10, description: 'Creative dribbler who loves to find space.' }
  ]
};

export const coachingStaff = [
  {
    name: 'Emmanuel Kadenge',
    role: 'Founder & Head Coach',
    experience: '1 year of leading the team, guiding multiple squads, and building a legacy of excellence in youth talent development.',
    image: emmanuelImg
  },
  {
    name: 'Victoria Kasyoka',
    role: 'Assistant Coach',
    experience: 'Supports weekly practice plans and player development across the squad.',
    image: victoriaImg
  },
  {
    name: 'Reinhard Mutiso',
    role: 'Assistant Coach',
    experience: 'Focuses on tactical training and match preparation for the first team.',
    image: reinhardImg,
    objectPosition: 'center 15%'
  },
  {
    name: 'Derrick Amboka',
    role: 'Goalkeeping Coach',
    experience: 'Specializes in goalkeeper technique, distribution, and shot-stopping drills.',
    image: derrickImg
  },
  {
    name: 'Alson Angaluki',
    role: 'Defending & Midfield Coach',
    experience: 'Develops transitional play and defensive organization across the team.',
    image: alsonImg,
    objectPosition: 'center 10%'
  },
  {
    name: 'Stanclous Lwaki',
    role: 'Team Secretary',
    experience: 'Manages team operations, communications, and logistics for every matchday.',
    image: stanclousImg
  },
  {
    name: 'Felix Achira',
    role: 'Technical Analyst',
    experience: 'Provides match analysis, opponent scouting, and performance insights.',
    image: felixImg
  }
];

