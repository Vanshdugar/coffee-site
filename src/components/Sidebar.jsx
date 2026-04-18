import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
  const location = useLocation()
  const links = [
    { to: '/', label: 'LATEST DROP', icon: '♫' },
    { to: '/archive', label: 'ARCHIVE', icon: '☰' },
    { to: '/episode/1', label: 'THE LABS', icon: '♨' },
    { to: '/about', label: 'ABOUT US', icon: '☕' },
  ]

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-logo-icon">
          <svg viewBox="0 0 40 40" width="40" height="40">
            <circle cx="20" cy="20" r="18" fill="var(--secondary-bold)" />
            <text x="20" y="26" textAnchor="middle" fill="var(--surface)" fontFamily="var(--font-display)" fontWeight="900" fontSize="16">SR</text>
          </svg>
        </div>
        <div className="sidebar-brand-text">
          <span className="sidebar-brand-name">SONIC ROAST</span>
          <span className="sidebar-brand-tagline">CAFFEINATED BRUTALISM</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`sidebar-link ${location.pathname === link.to ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">{link.icon}</span>
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button className="sidebar-support-btn">Support the Show</button>
      </div>
    </aside>
  )
}
