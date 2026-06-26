const galleryItems = [
  { 
    id: 1,
    title: 'Matchday Highlights', 
    type: 'Video', 
    caption: 'Watch our best moments from recent matches.',
    image: 'https://via.placeholder.com/300x200?text=Match+Video'
  },
  { 
    id: 2,
    title: 'Senior Team Training', 
    type: 'Photo', 
    caption: 'Focused drills from the senior squad preparing for upcoming matches.',
    image: 'https://via.placeholder.com/300x200?text=Training+Session'
  },
  { 
    id: 3,
    title: 'U-13 Match Day', 
    type: 'Photo', 
    caption: 'Young players building confidence and skills on the pitch.',
    image: 'https://via.placeholder.com/300x200?text=U13+Match'
  },
  { 
    id: 4,
    title: 'Team Celebrations', 
    type: 'Video', 
    caption: 'Victory celebrations and team spirit in action.',
    image: 'https://via.placeholder.com/300x200?text=Celebrations'
  },
  { 
    id: 5,
    title: 'U-9 Development Session', 
    type: 'Photo', 
    caption: 'The youngest squad learning the fundamentals of football.',
    image: 'https://via.placeholder.com/300x200?text=U9+Training'
  },
  { 
    id: 6,
    title: 'Tournament Highlights', 
    type: 'Video', 
    caption: 'Roasters FC competing in major tournaments.',
    image: 'https://via.placeholder.com/300x200?text=Tournament'
  }
];

export default function Gallery() {
  return (
    <section className="section section-gallery">
      <div className="section-header">
        <h2>Gallery</h2>
        <p>Photos and videos from training sessions, match days, and club events.</p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article key={item.id} className="gallery-card">
            <div className="gallery-image-container">
              <img 
                src={item.image}
                alt={item.title}
                className="gallery-image"
              />
              <div className="gallery-type-badge">{item.type}</div>
            </div>
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
