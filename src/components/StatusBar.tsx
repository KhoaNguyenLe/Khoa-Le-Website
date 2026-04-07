import { useApp } from '../context/AppContext';
import { FileCode } from 'lucide-react';

export default function StatusBar() {
  const { activeTabId, openTabs, theme } = useApp();
  const c = theme.colors;
  const currentTab = openTabs.find((t) => t.id === activeTabId);

  const getLanguage = (name?: string) => {
    if (!name) return 'Plain Text';
    if (name.endsWith('.tsx') || name.endsWith('.jsx')) return 'TypeScript React';
    if (name.endsWith('.ts')) return 'TypeScript';
    if (name.endsWith('.py')) return 'Python';
    if (name.endsWith('.java')) return 'Java';
    if (name.endsWith('.html')) return 'HTML';
    if (name.endsWith('.js')) return 'JavaScript';
    return 'Plain Text';
  };

  return (
    <footer
      className="status-bar"
      style={{ background: c.accent, color: c.bgTertiary }}
    >
      <div className="status-bar-left">
        <span className="status-item">
          <FileCode size={13} />
          {currentTab ? currentTab.name : 'Welcome'}
        </span>
      </div>
      <div className="status-bar-right">
        <span className="status-item">{getLanguage(currentTab?.name)}</span>
        <span className="status-item">UTF-8</span>
        <span className="status-item">LF</span>
        <span className="status-item">Spaces: 2</span>
      </div>
    </footer>
  );
}
