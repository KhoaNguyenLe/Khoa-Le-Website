import { useApp } from '../context/AppContext';
import { about } from '../data/resume';
import TerminalWidget from './TerminalWidget';
import { Music, Play } from 'lucide-react';

export default function SpotifyTerminal() {
  const { theme } = useApp();
  const c = theme.colors;
  const tracks = about.topTracks || [];

  return (
    <TerminalWidget title="spotify — zsh">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div 
            className="spotify-logo-container" 
            style={{ 
              backgroundColor: 'rgba(30, 215, 96, 0.1)', 
              padding: 12, 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="#1ed760" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.306c-.215.343-.663.454-1.006.24-2.836-1.733-6.406-2.126-10.612-1.165-.392.09-.79-.166-.88-.558s.163-.79.558-.88c4.606-1.054 8.566-.607 11.7 1.31.344.21.45.66.24 1.003L17.49 17.306zm1.465-3.264c-.27.442-.84.58-1.282.31-3.246-1.996-8.196-2.572-12.023-1.41-.5.152-1.025-.132-1.177-.632-.152-.5.132-1.023.632-1.175 4.38-1.33 9.83-.683 13.54 1.595.442.27.584.843.31 1.285l-.01.027zm.126-3.41c-3.894-2.312-10.32-2.525-14.076-1.385-.598.18-1.23-.158-1.41-.756s.158-1.23.756-1.41c4.305-1.306 11.41-1.052 15.91 1.62.538.318.716 1.01.398 1.547s-1.012.712-1.55.395l-.028-.01z" />
            </svg>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: c.text }}>Top Played Tracks</div>
            <div style={{ fontSize: 11, color: c.textMuted }}>Khoa's Daily Mix</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {tracks.map((track, i) => (
            <div 
              key={i} 
              className="track-item"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 10, 
                padding: '8px 12px',
                borderRadius: 6,
                backgroundColor: i === 0 ? 'rgba(30, 215, 96, 0.05)' : 'transparent',
                transition: 'background 0.2s'
              }}
            >
              <div style={{ color: i === 0 ? '#1ed760' : c.textMuted, display: 'flex' }}>
                {i === 0 ? <Play size={12} fill="#1ed760" /> : <Music size={12} />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: i === 0 ? '#1ed760' : c.text, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {track.title}
                </div>
                <div style={{ fontSize: 11, color: c.textMuted, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {track.artist}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TerminalWidget>
  );
}
