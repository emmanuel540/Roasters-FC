export default function NewsCard({ article }) {
  return (
    <article className="news-card">
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <small>{article.date}</small>
    </article>
  );
}
