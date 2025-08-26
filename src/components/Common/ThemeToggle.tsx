import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function ThemeToggle() {
  const { colorMode, setColorMode } = useColorMode();

  const toggleTheme = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      className="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${colorMode === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="theme-toggle-track">
        <div className={`theme-toggle-thumb ${colorMode === 'dark' ? 'dark' : 'light'}`}>
          <span className="theme-toggle-icon">
            {colorMode === 'dark' ? '🌙' : '☀️'}
          </span>
        </div>
      </div>
    </button>
  );
}
