import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { fileTree } from '../data/resume';
import type { FileNode } from '../data/resume';
import { getFileIcon } from './FileIcon';
import { ChevronRight, ChevronDown } from 'lucide-react';

function SidebarItem({
  node,
  depth = 0,
}: {
  node: FileNode;
  depth?: number;
}) {
  const { openFile, activeTabId, theme } = useApp();
  const [expanded, setExpanded] = useState(true);
  const c = theme.colors;
  const isActive = activeTabId === node.id;

  if (node.type === 'folder') {
    return (
      <div className="sidebar-folder">
        <button
          className="sidebar-item sidebar-folder-btn"
          style={{
            paddingLeft: `${12 + depth * 12}px`,
            color: c.text,
            background: 'transparent',
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <span className="sidebar-chevron" style={{ color: c.textMuted }}>
            {expanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
          {getFileIcon(expanded ? 'folder-open' : 'folder')}
          <span className="sidebar-label">{node.name}</span>
        </button>
        {expanded && node.children && (
          <div className="sidebar-children">
            {node.children.map((child) => (
              <SidebarItem key={child.id} node={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      className={`sidebar-item sidebar-file ${isActive ? 'sidebar-file-active' : ''}`}
      style={{
        paddingLeft: `${12 + depth * 12 + 18}px`,
        color: isActive ? c.text : c.textSecondary,
        background: isActive ? c.hover : 'transparent',
      }}
      onClick={() => openFile(node.id, node.name, node.icon || 'file')}
    >
      {getFileIcon(node.icon)}
      <span className="sidebar-label">{node.name}</span>
    </button>
  );
}

export default function Sidebar() {
  const { theme, sidebarCollapsed } = useApp();
  const c = theme.colors;

  if (sidebarCollapsed) return null;

  return (
    <aside
      className="sidebar"
      style={{ background: c.sidebarBg, borderRight: `1px solid ${c.border}` }}
    >
      <div
        className="sidebar-header"
        style={{ color: c.textMuted, borderBottom: `1px solid ${c.border}` }}
      >
        EXPLORER
      </div>
      <div className="sidebar-tree">
        {fileTree.map((node) => (
          <SidebarItem key={node.id} node={node} />
        ))}
      </div>
    </aside>
  );
}
