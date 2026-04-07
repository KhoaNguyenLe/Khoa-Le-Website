import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EditorTabs from './components/EditorTabs';
import FileContent from './components/FileContent';
import StatusBar from './components/StatusBar';
import './index.css';

function AppLayout() {
  const { theme, terminalOpen } = useApp();
  const c = theme.colors;

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main className="editor-area">
          <EditorTabs />
          <div className="editor-content">
            <FileContent />
          </div>
        </main>
        {terminalOpen && (
          <aside 
            className="terminal-panel"
            style={{ 
              background: c.bgSecondary, 
              borderLeft: `1px solid ${c.border}`,
              color: c.text
            }}
          >
            <div className="terminal-panel-header" style={{ borderBottom: `1px solid ${c.border}`, color: c.textMuted }}>
              <span>TERMINAL</span>
            </div>
            <div className="terminal-panel-content" style={{ fontFamily: 'Fira Code, monospace' }}>
              <span style={{ color: c.comment }}>$ </span>
              <span>coming soon...</span>
              <span className="terminal-cursor" style={{ background: c.accent }} />
            </div>
          </aside>
        )}
      </div>
      <StatusBar />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}
