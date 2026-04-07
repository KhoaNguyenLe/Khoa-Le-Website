import { useApp } from '../context/AppContext';
import { experiences, projects, leadership } from '../data/resume';
import AboutPage from '../pages/AboutPage';
import ExperiencePage from '../pages/ExperiencePage';
import ProjectPage from '../pages/ProjectPage';
import LeadershipPage from '../pages/LeadershipPage';
import WelcomePage from '../pages/WelcomePage';

export default function FileContent() {
  const { activeTabId, theme } = useApp();
  const c = theme.colors;

  if (!activeTabId) {
    return <WelcomePage />;
  }

  // About
  if (activeTabId === 'about') {
    return <AboutPage />;
  }

  // Experience
  if (activeTabId in experiences) {
    return <ExperiencePage data={experiences[activeTabId]} />;
  }

  // Projects
  if (activeTabId in projects) {
    return <ProjectPage data={projects[activeTabId]} />;
  }

  // Leadership
  if (activeTabId in leadership) {
    return <LeadershipPage data={leadership[activeTabId]} />;
  }

  return (
    <div className="page" style={{ color: c.textMuted, padding: 40 }}>
      <p>File not found: {activeTabId}</p>
    </div>
  );
}
