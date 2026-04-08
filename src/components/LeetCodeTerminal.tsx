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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 72,
            height: 72,
            flexShrink: 0
          }}
        >
          <img 
            src="/leetcode.png" 
            alt="LeetCode Logo" 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'contain',
              animation: 'fadeIn 0.5s ease-out'
            }} 
          />
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
