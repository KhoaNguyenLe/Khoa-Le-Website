import React, { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Tab, ThemeId, Theme } from '../types';
import { themes } from '../data/themes';

interface AppState {
  openTabs: Tab[];
  activeTabId: string | null;
  themeId: ThemeId;
  theme: Theme;
  sidebarCollapsed: boolean;
  openFile: (id: string, name: string, icon: string) => void;
  closeTab: (id: string) => void;
  setActiveTab: (id: string) => void;
  setTheme: (id: ThemeId) => void;
  toggleSidebar: () => void;
}

const AppContext = createContext<AppState | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [openTabs, setOpenTabs] = useState<Tab[]>([
    { id: 'about', name: 'about.tsx', icon: 'react' },
  ]);
  const [activeTabId, setActiveTabId] = useState<string | null>('about');
  const [themeId, setThemeId] = useState<ThemeId>('dark-default');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const theme = themes[themeId];

  const openFile = useCallback((id: string, name: string, icon: string) => {
    setOpenTabs((prev) => {
      if (prev.find((t) => t.id === id)) return prev;
      return [...prev, { id, name, icon }];
    });
    setActiveTabId(id);
  }, []);

  const closeTab = useCallback(
    (id: string) => {
      setOpenTabs((prev) => {
        const next = prev.filter((t) => t.id !== id);
        if (activeTabId === id) {
          const idx = prev.findIndex((t) => t.id === id);
          const newActive = next[Math.min(idx, next.length - 1)] ?? null;
          setActiveTabId(newActive?.id ?? null);
        }
        return next;
      });
    },
    [activeTabId],
  );

  const setActiveTab = useCallback((id: string) => {
    setActiveTabId(id);
  }, []);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeId(id);
  }, []);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((prev) => !prev);
  }, []);

  return React.createElement(
    AppContext.Provider,
    {
      value: {
        openTabs,
        activeTabId,
        themeId,
        theme,
        sidebarCollapsed,
        openFile,
        closeTab,
        setActiveTab,
        setTheme,
        toggleSidebar,
      },
    },
    children,
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
