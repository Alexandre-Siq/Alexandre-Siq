const icons = {
  calendar: (
    <svg viewBox="0 0 24 24" role="img">
      <path d="M7 3v3" />
      <path d="M17 3v3" />
      <rect x="4" y="5" width="16" height="16" rx="3" />
      <path d="M4 10h16" />
      <path d="M8 14h3" />
      <path d="M13 14h3" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" role="img">
      <path d="M5 5h14v10H9l-4 4V5Z" />
      <path d="M8 9h8" />
      <path d="M8 12h5" />
    </svg>
  ),
  stethoscope: (
    <svg viewBox="0 0 24 24" role="img">
      <path d="M7 4v5a5 5 0 0 0 10 0V4" />
      <path d="M9 4H5" />
      <path d="M19 4h-4" />
      <path d="M12 14v1a4 4 0 0 0 8 0v-2" />
      <circle cx="20" cy="11" r="2" />
    </svg>
  ),
};

function FeatureCard({ icon, title, description }) {
  return (
    <article className="feature-card">
      <span className="feature-icon" aria-hidden="true">
        {icons[icon]}
      </span>
      <h2>{title}</h2>
      <p>{description}</p>
    </article>
  );
}

export default FeatureCard;
