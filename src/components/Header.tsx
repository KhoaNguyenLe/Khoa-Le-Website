import { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { themes } from '../data/themes';
import type { ThemeId } from '../types';
import {
  ChevronDown,
  Download,
  Palette,
  PanelLeftClose,
  PanelLeftOpen,
  Check,
} from 'lucide-react';

export default function Header() {
  const { theme, themeId, setTheme, sidebarCollapsed, toggleSidebar } = useApp();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const c = theme.colors;

  return (
    <header
      className="header"
      style={{ background: c.headerBg, borderBottom: `1px solid ${c.border}`, color: c.text }}
    >
      <div className="header-left">
        <button
          className="header-sidebar-toggle"
          onClick={toggleSidebar}
          style={{ color: c.textMuted }}
          title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {sidebarCollapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
        </button>

        <div className="header-menus" ref={menuRef}>
          {/* File Menu */}
          <div className="header-menu-wrapper">
            <button
              className="header-menu-btn"
              style={{ color: c.textSecondary }}
              onClick={() => setOpenMenu(openMenu === 'file' ? null : 'file')}
            >
              File <ChevronDown size={12} />
            </button>
            {openMenu === 'file' && (
              <div
                className="header-dropdown"
                style={{ background: c.bgSecondary, border: `1px solid ${c.border}` }}
              >
                <a
                  href="/Khoa_Le_Resume.pdf"
                  download="Khoa_Le_Resume.pdf"
                  className="header-dropdown-item"
                  style={{ color: c.text }}
                  onClick={() => setOpenMenu(null)}
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            )}
          </div>

          {/* Themes Menu */}
          <div className="header-menu-wrapper">
            <button
              className="header-menu-btn"
              style={{ color: c.textSecondary }}
              onClick={() => setOpenMenu(openMenu === 'themes' ? null : 'themes')}
            >
              <Palette size={14} />
              Themes <ChevronDown size={12} />
            </button>
            {openMenu === 'themes' && (
              <div
                className="header-dropdown"
                style={{ background: c.bgSecondary, border: `1px solid ${c.border}` }}
              >
                {Object.values(themes).map((t) => (
                  <button
                    key={t.id}
                    className="header-dropdown-item"
                    style={{ color: c.text }}
                    onClick={() => {
                      setTheme(t.id as ThemeId);
                      setOpenMenu(null);
                    }}
                  >
                    <span
                      className="theme-swatch"
                      style={{
                        background: t.colors.accent,
                        boxShadow: `0 0 6px ${t.colors.accent}40`,
                      }}
                    />
                    {t.name}
                    {themeId === t.id && <Check size={14} className="theme-check" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="header-center">
        <span style={{ color: c.textMuted, fontSize: '12px', letterSpacing: '0.5px' }}>
          Khoa Nguyen Le — Portfolio
        </span>
      </div>

      <div className="header-right">
        <div className="header-traffic-lights">
          <span className="traffic-light traffic-red" />
          <span className="traffic-light traffic-yellow" />
          <span className="traffic-light traffic-green" />
        </div>
      </div>
    </header>
  );
}
