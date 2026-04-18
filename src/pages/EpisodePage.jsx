import Sidebar from '../components/Sidebar'
import AudioPlayer from '../components/AudioPlayer'
import './EpisodePage.css'

export default function EpisodePage() {
  return (
    <div className="episode-layout">
      <Sidebar />

      <div className="episode-main">
        <div className="episode-hero animate-fade-in-up">
          <div className="episode-hero-inner">
            {/* Guest portrait */}
            <div className="episode-portrait">
              <div className="episode-portrait-img">
                <img src="/images/episode-portrait.jpg" alt="Guest portrait - James Hoffmann" className="portrait-img" />
              </div>
              <div className="episode-portrait-glow" />
            </div>

            {/* Episode info */}
            <div className="episode-info">
              <div className="episode-tags">
                <span className="episode-tag tag-latest">LATEST DROP</span>
                <span className="episode-tag tag-type">INTERVIEW</span>
              </div>

              <h1 className="episode-title">
                THE POUR OVER<br />
                <span className="episode-title-accent">PARADOX</span>
              </h1>

              <p className="episode-desc">
                Exploring the cognitive dissonance of precision brewing in a chaotic world with guest James Hoffmann.
              </p>
            </div>
          </div>
        </div>

        {/* Audio Player */}
        <div className="episode-player-section">
          <AudioPlayer />
        </div>

        {/* Episode Notes */}
        <div className="episode-notes animate-fade-in-up stagger-4">
          <h2 className="notes-title">SHOW NOTES</h2>
          <div className="notes-content">
            <p>
              In this episode, we sit down with the legendary James Hoffmann to discuss the paradox
              of pour-over coffee. Why do we obsess over precise measurements, temperature control,
              and grind size in a world that's fundamentally unpredictable?
            </p>
            <h3>Topics Covered</h3>
            <ul>
              <li>The science behind V60 extraction dynamics</li>
              <li>Why the &ldquo;perfect&rdquo; recipe is a myth</li>
              <li>How to embrace chaos in your brewing routine</li>
              <li>James's controversial take on pre-wetting filters</li>
              <li>The future of specialty coffee competitions</li>
            </ul>
            <h3>Timestamps</h3>
            <div className="timestamps">
              <div className="timestamp"><span className="ts-time">00:00</span> Introduction & Coffee Setup</div>
              <div className="timestamp"><span className="ts-time">03:22</span> The Pour Over Philosophy</div>
              <div className="timestamp"><span className="ts-time">10:45</span> Precision vs. Intuition</div>
              <div className="timestamp"><span className="ts-time">18:30</span> Competition Brewing Secrets</div>
              <div className="timestamp"><span className="ts-time">28:15</span> The Filter Controversy</div>
              <div className="timestamp"><span className="ts-time">35:00</span> Rapid-Fire Tasting Notes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
