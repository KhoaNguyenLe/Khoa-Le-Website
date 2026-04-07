import { useApp } from '../context/AppContext';
import { getFileIcon } from './FileIcon';
import { X } from 'lucide-react';

export default function EditorTabs() {
  const { openTabs, activeTabId, setActiveTab, closeTab, theme } = useApp();
  const c = theme.colors;

  if (openTabs.length === 0) return null;

  return (
    <div
      className="editor-tabs"
      style={{ background: c.bgSecondary, borderBottom: `1px solid ${c.border}` }}
    >
      {openTabs.map((tab) => {
        const isActive = tab.id === activeTabId;
        return (
          <div
            key={tab.id}
            className={`editor-tab ${isActive ? 'editor-tab-active' : ''}`}
            style={{
              background: isActive ? c.activeTab : 'transparent',
              color: isActive ? c.text : c.textMuted,
              borderRight: `1px solid ${c.border}`,
              borderTop: isActive ? `2px solid ${c.accent}` : '2px solid transparent',
            }}
            onClick={() => setActiveTab(tab.id)}
          >
            {getFileIcon(tab.icon, 14)}
            <span className="editor-tab-label">{tab.name}</span>
            <button
              className="editor-tab-close"
              style={{ color: c.textMuted }}
              onClick={(e) => {
                e.stopPropagation();
                closeTab(tab.id);
              }}
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
