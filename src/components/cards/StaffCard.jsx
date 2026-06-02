export default function StaffCard({ staff }) {
  return (
    <article className="coach-card">
      <div>
        <h3>{staff.name}</h3>
        <p className="coach-role">{staff.role}</p>
      </div>
      <p>{staff.description}</p>
    </article>
  );
}
