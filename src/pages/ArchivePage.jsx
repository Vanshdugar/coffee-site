import { useState } from 'react'
import EpisodeCard from '../components/EpisodeCard'
import './ArchivePage.css'

const ROAST_LEVELS = ['Light', 'Medium', 'Dark', 'Espresso']
const BREW_METHODS = ['Pour Over', 'French Press', 'Cold Brew']

const EPISODES = [
  {
    title: 'V60 vs. Chemex Showdown',
    description: 'They pour water. We taste carefully. Is one really better?',
    episode: 'EP. 143',
    duration: '42 MIN',
    tags: ['POUR OVER'],
    image: '/images/archive-chemex.jpg',
    variant: 'featured',
  },
  {
    title: 'The Perfect Crema: Myth or Math?',
    description: "We dive deep into the thermodynamics of espresso extraction with guest barista champion Sarah Jenkins. Is the crema really the best part?",
    episode: 'EP. 142',
    duration: '34 MIN',
    date: 'OCT 24, 2025',
    tags: ['ESPRESSO'],
    image: '/images/archive-crema.jpg',
  },
  {
    title: 'Midnight Roasting Mistakes',
    description: 'Late night roasting sessions gone wrong — and what we learned.',
    episode: 'EP. 141',
    tags: ['DARK ROAST'],
    imageGradient: 'orange',
    variant: 'compact',
  },
  {
    title: 'The Analog Audio Setup',
    description: 'Behind the scenes of how we record the roast. Ideas, preamps, and unnecessary gear.',
    episode: 'EP. 140',
    duration: '38 MIN',
    tags: ['COLD BREW'],
    imageGradient: 'cool',
    variant: 'compact',
  },
  {
    title: 'Cold Brew vs Iced Coffee',
    description: 'Steep overnight or cool it all down? The eternal debate, settled once and for all... just kidding.',
    episode: 'EP. 139',
    duration: '31 MIN',
    tags: ['COLD BREW'],
    imageGradient: 'teal',
    variant: 'compact',
  },
  {
    title: 'Fruity Pebbles in my Cup',
    description: "Exploring the natural processing of fruit-forward Ethiopian coffees...",
    episode: 'EP. 138',
    duration: '18 MIN',
    tags: ['LIGHT ROAST'],
    imageGradient: 'warm',
    variant: 'compact',
  },
]

export default function ArchivePage() {
  const [activeRoast, setActiveRoast] = useState(null)
  const [activeBrew, setActiveBrew] = useState(null)
  const [search, setSearch] = useState('')

  return (
    <div className="archive">
      <div className="archive-header animate-fade-in-up">
        <h1 className="archive-title">THE ARCHIVE</h1>
        <p className="archive-desc">
          Deep cuts, dark roasts, and over-caffeinated conversations. Search the vault.
        </p>
      </div>

      {/* Filters */}
      <div className="archive-filters animate-fade-in-up stagger-1">
        <div className="filter-row">
          <div className="filter-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            <input
              type="text"
              placeholder="Search episodes, guests..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <span className="filter-label">ROAST LEVEL</span>
            <div className="filter-chips">
              {ROAST_LEVELS.map((level) => (
                <button
                  key={level}
                  className={`filter-chip ${activeRoast === level ? 'active' : ''}`}
                  onClick={() => setActiveRoast(activeRoast === level ? null : level)}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <span className="filter-label">BREW METHOD</span>
            <div className="filter-chips">
              {BREW_METHODS.map((method) => (
                <button
                  key={method}
                  className={`filter-chip ${activeBrew === method ? 'active' : ''}`}
                  onClick={() => setActiveBrew(activeBrew === method ? null : method)}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Episode Grid */}
      <div className="archive-grid">
        {/* Featured row */}
        <div className="archive-featured animate-fade-in-up stagger-2">
          <EpisodeCard {...EPISODES[0]} />
          <EpisodeCard {...EPISODES[1]} />
        </div>

        {/* Compact row */}
        <div className="archive-compact animate-fade-in-up stagger-3">
          {EPISODES.slice(2).map((ep, i) => (
            <EpisodeCard key={i} {...ep} />
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="archive-load-more animate-fade-in-up stagger-4">
        <button className="load-more-btn">LOAD MORE DROPS &darr;</button>
      </div>
    </div>
  )
}
