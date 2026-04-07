import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import EditorTabs from './components/EditorTabs';
import FileContent from './components/FileContent';
import StatusBar from './components/StatusBar';
import './index.css';

function AppLayout() {
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
