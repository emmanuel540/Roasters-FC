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

export const coach = {
  name: 'Emmanuel Kadenge',
  role: 'Founder & Head Coach',
  experience: '7 seasons leading championship-challenged squads to victory and developing youth talent.'
};
