type GuideCardProps = {
  category: string;
  title: string;
  description: string;
  readTime: string;
};

function GuideCard({
  category,
  title,
  description,
  readTime,
}: GuideCardProps) {
  return (
    <article className="guide-card">
      <div className="guide-card-top">
        <span className="guide-category">{category}</span>
        <span className="guide-arrow">↗</span>
      </div>

      <div className="guide-card-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <span className="guide-read-time">{readTime}</span>
      </div>
    </article>
  );
}

export default GuideCard;