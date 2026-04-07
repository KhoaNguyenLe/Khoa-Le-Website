import { useApp } from '../context/AppContext';
import type { LeadershipEntry } from '../data/resume';
import { MapPin, Calendar, Crown } from 'lucide-react';

export default function LeadershipPage({ data }: { data: LeadershipEntry }) {
  const { theme } = useApp();
  const c = theme.colors;

  return (
    <div className="page leadership-page" style={{ color: c.text }}>
      <div className="line-numbers" style={{ color: c.textMuted }}>
        {Array.from({ length: 30 }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      <div className="page-content">
        <div className="code-comment" style={{ color: c.comment }}>
          {'/**'}
          <br />
          {` * @organization ${data.org}`}
          <br />
          {` * @role ${data.role}`}
          <br />
          {' */'}
        </div>

        <div className="entry-header">
          <h1 className="entry-title" style={{ color: c.accent }}>
            <Crown size={20} style={{ marginRight: 8 }} />
            {data.role}
          </h1>
          <h2 className="entry-subtitle" style={{ color: c.function }}>
            {data.org}
          </h2>
          <div className="entry-meta">
            <span style={{ color: c.textMuted }}>
              <Calendar size={13} /> {data.date}
            </span>
            <span style={{ color: c.textMuted }}>
              <MapPin size={13} /> {data.location}
            </span>
          </div>
        </div>

        <div className="about-divider" style={{ borderColor: c.border }} />

        <div className="code-block" style={{ borderLeft: `3px solid ${c.number}` }}>
          <ul className="entry-bullets">
            {data.bullets.map((b, i) => (
              <li key={i} className="entry-bullet" style={{ color: c.textSecondary }}>
                <span className="bullet-marker" style={{ color: c.number }}>→</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="entry-tags">
          {data.tags.map((t) => (
            <span key={t} className="skill-tag" style={{ background: c.tag, color: c.tagText }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
