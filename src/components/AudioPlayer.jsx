import { useState } from 'react'
import './AudioPlayer.css'

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  const bars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    delay: Math.random() * 1.5,
    height: 15 + Math.random() * 85,
  }))

  return (
    <div className="audio-player">
      <button
        className={`play-btn ${isPlaying ? 'playing' : ''}`}
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16" rx="1"/>
            <rect x="14" y="4" width="4" height="16" rx="1"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6,4 20,12 6,20"/>
          </svg>
        )}
      </button>

      <div className="player-body">
        <div className="waveform">
          {bars.map((bar) => (
            <div
              key={bar.id}
              className={`waveform-bar ${isPlaying ? 'animating' : ''}`}
              style={{
                '--bar-height': `${bar.height}%`,
                '--bar-delay': `${bar.delay}s`,
                height: isPlaying ? undefined : `${bar.height}%`,
              }}
            />
          ))}
        </div>

        <div className="player-controls">
          <span className="player-time current">10:45</span>
          <div className="player-actions">
            <button className="player-action" aria-label="Rewind 15s">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10"/>
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
              </svg>
            </button>
            <button className="player-action" aria-label="Forward 15s">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 4 23 10 17 10"/>
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
              </svg>
            </button>
            <button className="player-action" aria-label="Volume">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
              </svg>
            </button>
            <button className="player-action" aria-label="More options">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="5" r="1.5"/>
                <circle cx="12" cy="12" r="1.5"/>
                <circle cx="12" cy="19" r="1.5"/>
              </svg>
            </button>
          </div>
          <span className="player-time remaining">-4:15</span>
        </div>
      </div>
    </div>
  )
}
