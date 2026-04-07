import type { ReactNode } from 'react';
import { useApp } from '../context/AppContext';

interface TerminalWidgetProps {
  title: string;
  children: ReactNode;
  width?: string;
}

export default function TerminalWidget({ title, children, width = '100%' }: TerminalWidgetProps) {
  const { theme } = useApp();
  const c = theme.colors;

  return (
    <div 
      className="terminal-window" 
      style={{ 
        width, 
        backgroundColor: c.bgSecondary, 
        border: `1px solid ${c.border}`,
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        animation: 'fadeIn 0.4s ease-out'
      }}
    >
      <div 
        className="terminal-header" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: 32, 
          padding: '0 12px', 
          backgroundColor: c.bgTertiary,
          borderBottom: `1px solid ${c.border}`
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f56' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ffbd2e' }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#27c93f' }} />
        </div>
        <div 
          style={{ 
            fontSize: 11, 
            fontWeight: 500, 
            color: c.textMuted,
            fontFamily: 'monospace'
          }}
        >
          {title}
        </div>
        <div style={{ width: 42 }} /> {/* Spacing for alignment */}
      </div>
      <div className="terminal-body" style={{ padding: 20 }}>
        {children}
      </div>
    </div>
  );
}
