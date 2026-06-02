export default function SectionWrapper({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}
