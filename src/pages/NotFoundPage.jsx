import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="section section-about">
      <div className="section-header">
        <h2>Page not found</h2>
        <p>Looks like the page you were trying to reach does not exist.</p>
        <Link className="button primary" to="/">Go back home</Link>
      </div>
    </section>
  );
}
