import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { about } from '../data/resume';
import TerminalWidget from './TerminalWidget';
import { Loader2 } from 'lucide-react';

interface LeetCodeStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
}

export default function LeetCodeTerminal() {
  const { theme } = useApp();
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const c = theme.colors;

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3000);

    fetch('https://leetcode-stats-api.herokuapp.com/khoanguyenle', { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setStats({
            totalSolved: data.totalSolved,
            easySolved: data.easySolved,
            mediumSolved: data.mediumSolved,
            hardSolved: data.hardSolved,
          });
        }
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.warn('LeetCode API timed out after 3s. Using fallback data.');
        } else {
          console.error('LeetCode API Fetch Error:', err);
        }
      })
      .finally(() => {
        clearTimeout(timeoutId);
        setLoading(false);
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  // Use hardcoded backup if stats are null
  const displayStats = stats || about.leetcodeStats;

  if (loading && !stats) {
    return (
      <TerminalWidget title="leetcode — zsh">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 120 }}>
          <Loader2 className="animate-spin" size={24} color={c.textMuted} />
        </div>
      </TerminalWidget>
    );
  }

  return (
    <TerminalWidget title="leetcode — zsh">
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <div 
          className="leetcode-logo-container" 
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.05)', 
            padding: 16, 
            borderRadius: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.04 6.274c-.273.285-.403.625-.403.961 0 .336.13.676.403.961l.006.006.007.007 3.39 3.518a1.374 1.374 0 001.966 0 1.374 1.374 0 000-1.966L10.5 7.412h8.04l.006.006.007.007 3.39 3.518a1.374 1.374 0 001.966 0 1.374 1.374 0 000-1.966l-5.485-5.698A1.374 1.374 0 0013.483 0z" fill="#B3B3B3"/>
            <path d="M13.483 24a1.374 1.374 0 01-.961-.438L.437 11.834a1.374 1.374 0 010-1.966l5.485-5.698a1.374 1.374 0 012.083.155 1.374 1.374 0 01-.155 2.083l-4.524 4.498 10.155 10.603h8.04l-.006-.006-.007-.007-3.39-3.518a1.374 1.374 0 010-1.966 1.374 1.374 0 011.966 0 1.374 1.374 0 010 1.966l5.483 5.698A1.374 1.374 0 0122.539 24h-9.056z" fill="#FFA116"/>
          </svg>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
          <div style={{ fontSize: 13, color: c.text, fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
            <span>total solved:</span>
            <span style={{ color: c.accent }}>{displayStats.totalSolved}</span>
          </div>
          <div style={{ fontSize: 13, color: '#00b8a3', fontWeight: 500, display: 'flex', justifyContent: 'space-between' }}>
            <span>easy:</span>
            <span>{displayStats.easySolved}</span>
          </div>
          <div style={{ fontSize: 13, color: '#ffc01e', fontWeight: 500, display: 'flex', justifyContent: 'space-between' }}>
            <span>medium:</span>
            <span>{displayStats.mediumSolved}</span>
          </div>
          <div style={{ fontSize: 13, color: '#ff375f', fontWeight: 500, display: 'flex', justifyContent: 'space-between' }}>
            <span>hard:</span>
            <span>{displayStats.hardSolved}</span>
          </div>
        </div>
      </div>
    </TerminalWidget>
  );
}
