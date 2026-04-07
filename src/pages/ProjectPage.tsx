import { useApp } from '../context/AppContext';
import type { ProjectEntry } from '../data/resume';
import { Calendar, Layers } from 'lucide-react';

export default function ProjectPage({ data }: { data: ProjectEntry }) {
  const { theme } = useApp();
  const c = theme.colors;

  return (
    <div className="page project-page" style={{ color: c.text }}>
      <div className="line-numbers" style={{ color: c.textMuted }}>
        {Array.from({ length: 30 }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      <div className="page-content">
        <div className="code-comment" style={{ color: c.comment }}>
          {'/**'}
          <br />
          {` * @project ${data.name}`}
          <br />
          {` * @stack ${data.stack}`}
          <br />
          {' */'}
        </div>

        <div className="entry-header">
          <h1 className="entry-title" style={{ color: c.accent }}>
            <Layers size={20} style={{ marginRight: 8 }} />
            {data.name}
          </h1>
          <p className="entry-stack" style={{ color: c.function }}>
            {data.stack}
          </p>
          <div className="entry-meta">
            <span style={{ color: c.textMuted }}>
              <Calendar size={13} /> {data.date}
            </span>
          </div>
        </div>

        <div className="about-divider" style={{ borderColor: c.border }} />

        <div className="code-block" style={{ borderLeft: `3px solid ${c.accentSecondary}` }}>
          <ul className="entry-bullets">
            {data.bullets.map((b, i) => (
              <li key={i} className="entry-bullet" style={{ color: c.textSecondary }}>
                <span className="bullet-marker" style={{ color: c.accentSecondary }}>→</span>
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
