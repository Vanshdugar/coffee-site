import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          THE SONIC ROAST
        </Link>

        <div className="navbar-links">
          <Link to="/archive" className={`navbar-link ${location.pathname === '/archive' ? 'active' : ''}`}>
            ARCHIVE
          </Link>
          <Link to="/archive" className="navbar-link">BREW GUIDES</Link>
          <Link to="/about" className={`navbar-link ${location.pathname === '/about' ? 'active' : ''}`}>
            ABOUT
          </Link>
          <Link to="/" className="navbar-link">SHOP</Link>
        </div>

        <div className="navbar-actions">
          <button className="navbar-search" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
          <Link to="/" className="navbar-subscribe">SUBSCRIBE</Link>
        </div>
      </div>
    </nav>
  )
}
