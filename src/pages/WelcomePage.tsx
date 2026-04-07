import { useApp } from '../context/AppContext';
import { Code2, FolderOpen } from 'lucide-react';

export default function WelcomePage() {
  const { theme } = useApp();
  const c = theme.colors;

  return (
    <div className="welcome-page" style={{ color: c.textMuted }}>
      <div className="welcome-inner">
        <div className="welcome-icon" style={{ color: c.accent }}>
          <Code2 size={64} strokeWidth={1} />
        </div>
        <h1 className="welcome-title" style={{ color: c.text }}>
          Khoa Nguyen Le
        </h1>
        <p className="welcome-subtitle" style={{ color: c.textSecondary }}>
          ECE Student & Software Engineer
        </p>
        <div className="welcome-hint">
          <FolderOpen size={16} />
          <span>Open a file from the explorer to get started</span>
        </div>
        <div className="welcome-shortcuts">
          <div className="welcome-shortcut" style={{ borderColor: c.border }}>
            <span className="shortcut-key" style={{ background: c.hover, color: c.accent }}>
              ← Sidebar
            </span>
            <span>Browse sections</span>
          </div>
          <div className="welcome-shortcut" style={{ borderColor: c.border }}>
            <span className="shortcut-key" style={{ background: c.hover, color: c.accent }}>
              File ↓
            </span>
            <span>Download resume</span>
          </div>
          <div className="welcome-shortcut" style={{ borderColor: c.border }}>
            <span className="shortcut-key" style={{ background: c.hover, color: c.accent }}>
              Themes ↓
            </span>
            <span>Switch color theme</span>
          </div>
        </div>
      </div>
    </div>
  );
}
