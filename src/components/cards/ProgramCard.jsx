export default function ProgramCard({ program }) {
  return (
    <article className="program-card">
      <h3>{program.title}</h3>
      <p>{program.description}</p>
    </article>
  );
}
