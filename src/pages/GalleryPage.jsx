const galleryItems = [
  { title: 'Matchday Highlights', type: 'Video', caption: 'A look back at our best team moments.' },
  { title: 'Senior Team Training', type: 'Photo', caption: 'Focused drills from the senior squad.' },
  { title: 'U-13 Match Day', type: 'Photo', caption: 'Young players building confidence on the pitch.' },
  { title: 'Community Event', type: 'Video', caption: 'Roasters FC bringing fans together.' }
];

export default function GalleryPage() {
  return (
    <section className="section section-gallery">
      <div className="section-header">
        <h2>Gallery</h2>
        <p>Team photos and videos from the club. Send your media and we&rsquo;ll display it here soon.</p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article key={item.title} className="gallery-card">
            <div className="gallery-preview">{item.type}</div>
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
