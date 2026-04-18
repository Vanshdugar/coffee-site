import { Link } from 'react-router-dom'
import EpisodeCard from '../components/EpisodeCard'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home">
      {/* Splatter background elements */}
      <div className="splatter splatter-1" />
      <div className="splatter splatter-2" />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content animate-fade-in-up">
            <span className="hero-badge">LATEST DROP</span>
            <h1 className="hero-title">
              THE DARK ROAST<br />
              <span className="hero-title-accent">DILEMMA</span>
            </h1>
            <p className="hero-desc">
              We dive deep into the controversial world of over-roasted beans. Is it flavor, or just burnt ashes? Featuring master roaster Jane Chen.
            </p>
            <div className="hero-actions">
              <Link to="/episode/1" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6,4 20,12 6,20" />
                </svg>
                LISTEN NOW
              </Link>
              <button className="btn-icon" aria-label="Share">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </button>
              <button className="btn-icon" aria-label="Add to favorites">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="hero-visual animate-scale-in stagger-2">
            <div className="hero-image-wrapper">
              <div className="hero-image">
                <img src="/images/hero-beans.jpg" alt="Dark roasted coffee beans pouring from a burlap sack into a modern metallic grinder" className="hero-img" />
              </div>
              <div className="hero-image-accent" />
            </div>
          </div>
        </div>
      </section>

      {/* Fresh Pours Section */}
      <section className="fresh-pours">
        <div className="section-header">
          <div>
            <h2 className="section-title animate-fade-in-up">FRESH POURS</h2>
            <span className="section-subtitle animate-fade-in-up stagger-1">RECENT EPISODES</span>
          </div>
          <Link to="/archive" className="view-all animate-fade-in-up stagger-2">VIEW ARCHIVE &rarr;</Link>
        </div>

        <div className="episodes-grid">
          <div className="animate-fade-in-up stagger-2">
            <EpisodeCard
              title="The Art of the Pull: Espresso Mechanics"
              description="Precision grinding, channeling, and temperature surfing with World Barista Champion Marco..."
              episode="EP. 43"
              duration="45 MIN"
              image="/images/barista-latte.jpg"
              variant="featured"
            />
          </div>

          <div className="animate-fade-in-up stagger-3">
            <EpisodeCard
              title="Caffeine Defense Squad"
              description="Is coffee actually helping? The latest scientific evidence on performance and health."
              episode="EP. 42"
              duration="38 MIN"
              imageGradient="cool"
            />
          </div>

          <div className="episode-pair">
            <div className="animate-fade-in-up stagger-4">
              <EpisodeCard
                title="Water Chemistry 101"
                description="How mineral content affects extraction. Third Wave Water's formulation..."
                episode="EP. 41"
                duration="32 MIN"
                imageGradient="dark"
                variant="compact"
              />
            </div>

            <div className="quote-block animate-fade-in-up stagger-5">
              <blockquote>
                <span className="quote-mark">&ldquo;</span>
                A GOOD ROBUSTA IS LIKE A PUNCH IN THE FACE, BUT IN A GOOD WAY.
                <span className="quote-mark">&rdquo;</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Midnight Oil Blend Promo */}
      <section className="promo animate-fade-in-up stagger-5">
        <div className="promo-inner">
          <div className="promo-visual">
            <div className="promo-bag">
              <img src="/images/coffee-bag.jpg" alt="Matte black coffee bag with neon orange typography on concrete surface" className="promo-bag-img" />
            </div>
          </div>
          <div className="promo-content">
            <span className="promo-badge">FEATURED BLEND</span>
            <h2 className="promo-title">
              MIDNIGHT OIL<br />BLEND
            </h2>
            <p className="promo-desc">
              Our collaboration with <strong>Pacific Roasters</strong>. Notes of dark chocolate, burnt sugar, and cedarwood finish. Perfect for all-day brew when the code just won't compile.
            </p>
            <Link to="/" className="btn-outline">
              READ THE STORY &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-inner">
          <span className="footer-brand">THE SONIC ROAST</span>
          <span className="footer-copy">&copy; 2025 Caffeinated Brutalism. All rights reserved.</span>
        </div>
      </footer>
    </div>
  )
}
