export interface Tab {
  id: string;
  name: string;
  icon: string;
}

export type ThemeId = 'dark-default' | 'monokai' | 'github-dark' | 'catppuccin';

export interface Theme {
  id: ThemeId;
  name: string;
  colors: {
    bg: string;
    bgSecondary: string;
    bgTertiary: string;
    border: string;
    text: string;
    textSecondary: string;
    textMuted: string;
    accent: string;
    accentSecondary: string;
    hover: string;
    activeTab: string;
    sidebarBg: string;
    headerBg: string;
    scrollbar: string;
    scrollbarHover: string;
    tag: string;
    tagText: string;
    keyword: string;
    string: string;
    function: string;
    comment: string;
    variable: string;
    number: string;
  };
}
