import Sidebar from '../components/Sidebar'
import './AboutPage.css'

const TEAM = [
  {
    name: 'Marcus Chen',
    role: 'Host & Head Roaster',
    bio: 'Former audio engineer turned coffee obsessive. Marcus brings precision and ear-splitting opinions to every episode.',
  },
  {
    name: 'Amara Obi',
    role: 'Co-Host & Brew Scientist',
    bio: 'PhD in Chemistry, passion for extraction. Amara breaks down the molecular magic behind every cup.',
  },
  {
    name: 'Diego Fuentes',
    role: 'Producer & Sound Engineer',
    bio: 'The ears behind the mic. Diego crafts the sonic landscape that makes each episode feel like a warm mug in your hands.',
  },
]

export default function AboutPage() {
  return (
    <div className="about-layout">
      <Sidebar />

      <div className="about-main">
        {/* Hero */}
        <div className="about-hero">
          <div className="about-hero-content animate-fade-in-up">
            <h1 className="about-title">
              THE BREW<br />
              <span className="about-title-accent">CREW</span>
            </h1>
            <p className="about-intro">
              We are the jittery minds behind the mic. Exploring the intersection of high-fidelity
              audio engineering and obsessive coffee extraction.
            </p>
          </div>

          <div className="about-hero-visual animate-scale-in stagger-2">
            <div className="about-image">
              <img src="/images/about-coffee-pour.jpg" alt="Coffee being poured from a gooseneck kettle into a ceramic cup" className="about-img" />
            </div>
            <div className="about-image-glow" />
          </div>
        </div>

        {/* Mission */}
        <section className="about-mission animate-fade-in-up stagger-3">
          <div className="mission-block">
            <h2 className="mission-label">OUR MISSION</h2>
            <p className="mission-text">
              The Sonic Roast was born from a late-night recording session and a questionable amount
              of Ethiopian Yirgacheffe. We believe that coffee and sound share the same DNA &mdash;
              both require precision, patience, and a willingness to experiment wildly.
            </p>
            <p className="mission-text">
              Every week, we dive into the science, culture, and craft of specialty coffee.
              From water chemistry to roast profiles, from latte art physics to the ethics
              of direct trade &mdash; no bean is left unturned.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="about-team animate-fade-in-up stagger-4">
          <h2 className="team-section-title">THE LINEUP</h2>
          <div className="team-grid">
            {TEAM.map((member, i) => (
              <div key={member.name} className={`team-card animate-fade-in-up stagger-${i + 3}`}>
                <div className="team-avatar">
                  <div className="team-avatar-inner">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="about-stats animate-fade-in-up stagger-5">
          <div className="stat">
            <span className="stat-number">142+</span>
            <span className="stat-label">EPISODES</span>
          </div>
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">LISTENERS</span>
          </div>
          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">CUPS OF COFFEE</span>
          </div>
          <div className="stat">
            <span className="stat-number">4.9</span>
            <span className="stat-label">AVG RATING</span>
          </div>
        </section>
      </div>
    </div>
  )
}
