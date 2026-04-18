import { Link } from 'react-router-dom'
import './EpisodeCard.css'

export default function EpisodeCard({
  title,
  description,
  episode,
  duration,
  date,
  tags = [],
  variant = 'default',
  image,
  imageGradient,
}) {
  const gradients = {
    warm: 'linear-gradient(135deg, #5b2200 0%, #1c110c 100%)',
    cool: 'linear-gradient(135deg, #00363d 0%, #1c110c 100%)',
    dark: 'linear-gradient(135deg, #342721 0%, #160c07 100%)',
    orange: 'linear-gradient(135deg, #ff7216 0%, #5b2200 100%)',
    teal: 'linear-gradient(135deg, #00e3fd 0%, #00363d 100%)',
  }

  return (
    <Link to="/episode/1" className={`episode-card variant-${variant}`}>
      <div
        className="episode-card-image"
        style={{ background: image ? undefined : (gradients[imageGradient] || gradients.warm) }}
      >
        {image && <img src={image} alt={title} className="episode-card-img" />}
        <div className="episode-card-image-overlay" />
        {variant === 'featured' && (
          <div className="episode-card-play">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="6,4 20,12 6,20" />
            </svg>
          </div>
        )}
      </div>

      <div className="episode-card-content">
        <div className="episode-card-meta">
          {episode && <span className="episode-card-ep">{episode}</span>}
          {tags.map((tag) => (
            <span key={tag} className="episode-card-tag">{tag}</span>
          ))}
        </div>

        <h3 className="episode-card-title">{title}</h3>

        {description && (
          <p className="episode-card-desc">{description}</p>
        )}

        <div className="episode-card-footer">
          {duration && <span className="episode-card-duration">{duration}</span>}
          {date && <span className="episode-card-date">{date}</span>}
        </div>
      </div>
    </Link>
  )
}
