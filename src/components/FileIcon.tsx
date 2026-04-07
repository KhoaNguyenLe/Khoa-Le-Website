import React from 'react';

// Simple SVG file icons matching common language extensions
export function getFileIcon(icon?: string, size = 16): React.ReactNode {
  const s = { width: size, height: size, flexShrink: 0 };

  switch (icon) {
    case 'react':
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="2.5" fill="#61dafb" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1" fill="none" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'typescript':
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178c6" />
          <text x="12" y="17" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#fff" fontFamily="monospace">TS</text>
        </svg>
      );
    case 'python':
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#3776ab" />
          <text x="12" y="17" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffd43b" fontFamily="monospace">PY</text>
        </svg>
      );
    case 'java':
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#ed8b00" />
          <text x="12" y="17" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff" fontFamily="monospace">JV</text>
        </svg>
      );
    case 'html':
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#e44d26" />
          <text x="12" y="16.5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff" fontFamily="monospace">{'</>'}</text>
        </svg>
      );
    case 'leetcode':
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none">
          <path d="M16.105 18.567l.474.79-.355.214-.474-.79a1.185 1.185 0 01-1.025.568H5.987a1.185 1.185 0 01-1.025-.568l-.474.79-.355-.214.474-.79a1.185 1.185 0 01-.157-1.185l2.4-7.11a1.185 1.185 0 011.125-.806h6.053a1.185 1.185 0 011.125.806l2.4 7.11a1.185 1.185 0 01-.157 1.185z" fill="#ffa116" />
          <path d="M12 12.5h-2.5v2.5H12v-2.5z" fill="#fff" />
        </svg>
      );
    case 'folder':
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none">
          <path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" fill="#dcb67a" opacity="0.85" />
        </svg>
      );
    case 'folder-open':
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none">
          <path d="M2 6a2 2 0 012-2h5l2 2h9a2 2 0 012 2v1H7.5a2 2 0 00-1.9 1.37L2 19V6z" fill="#dcb67a" opacity="0.85" />
          <path d="M5.5 10h16a1 1 0 01.96 1.28l-2.5 8.5A1 1 0 0119 20.5H3.5L5.5 10z" fill="#dcb67a" />
        </svg>
      );
    default:
      return (
        <svg style={s} viewBox="0 0 24 24" fill="none">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" fill="#6c7086" opacity="0.4" />
          <path d="M14 2v6h6" fill="none" stroke="#6c7086" strokeWidth="1" />
        </svg>
      );
  }
}
