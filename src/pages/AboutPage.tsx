import { useApp } from '../context/AppContext';
import { about } from '../data/resume';
import {
  Mail,
  Phone,
  GraduationCap,
  ExternalLink,
  Link,
  Code2,
  Server,
  Database,
  Wrench,
  Globe,
} from 'lucide-react';

export default function AboutPage() {
  const { theme } = useApp();
  const c = theme.colors;

  const skillCategories = [
    { label: 'Languages', items: about.skills.languages, icon: <Code2 size={15} />, color: c.keyword },
    { label: 'Frontend', items: about.skills.frontend, icon: <Globe size={15} />, color: c.function },
    { label: 'Backend', items: about.skills.backend, icon: <Server size={15} />, color: c.string },
    { label: 'Data', items: about.skills.data, icon: <Database size={15} />, color: c.variable },
    { label: 'Developer Tools', items: about.skills.devTools, icon: <Wrench size={15} />, color: c.number },
  ];

  return (
    <div className="page about-page" style={{ color: c.text }}>
      {/* line numbers gutter decoration */}
      <div className="line-numbers" style={{ color: c.textMuted }}>
        {Array.from({ length: 45 }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      <div className="page-content">
        {/* Comment block header */}
        <div className="code-comment" style={{ color: c.comment }}>
          {'/**'}
          <br />
          {' * @file about.tsx'}
          <br />
          {' * @author Khoa Nguyen Le'}
          <br />
          {' * @description Portfolio — About & Skills'}
          <br />
          {' */'}
        </div>

        <div className="about-hero">
          <h1 className="about-name" style={{ color: c.accent }}>
            {about.name}
          </h1>
          <p className="about-degree" style={{ color: c.textSecondary }}>
            <GraduationCap size={16} style={{ marginRight: 6 }} />
            {about.education.degree}
          </p>
          <p className="about-school" style={{ color: c.textMuted }}>
            {about.education.school} · GPA: {about.education.gpa} · {about.education.graduation}
          </p>
        </div>

        <div className="about-contact">
          <a href={`mailto:${about.email}`} className="about-link" style={{ color: c.accentSecondary }}>
            <Mail size={14} /> {about.email}
          </a>
          <a href={`tel:${about.phone}`} className="about-link" style={{ color: c.accentSecondary }}>
            <Phone size={14} /> {about.phone}
          </a>
          <a
            href={`https://${about.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
            style={{ color: c.accentSecondary }}
          >
            <Link size={14} /> {about.linkedin}
          </a>
          <a
            href={`https://${about.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
            style={{ color: c.accentSecondary }}
          >
            <ExternalLink size={14} /> {about.github}
          </a>
        </div>

        <div className="about-divider" style={{ borderColor: c.border }} />

        <h2 className="section-heading" style={{ color: c.keyword }}>
          <span style={{ color: c.keyword }}>const </span>
          <span style={{ color: c.function }}>technicalSkills</span>
          <span style={{ color: c.text }}> = {'{'}</span>
        </h2>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div key={cat.label} className="skill-category">
              <h3 className="skill-label" style={{ color: cat.color }}>
                {cat.icon}
                {cat.label}
              </h3>
              <div className="skill-tags">
                {cat.items.map((s) => (
                  <span
                    key={s}
                    className="skill-tag"
                    style={{ background: c.tag, color: c.tagText }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ color: c.text, marginTop: 8 }}>{'};'}</p>
      </div>
    </div>
  );
}
