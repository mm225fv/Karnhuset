import React from 'react';
import { useTheme } from '../context/ThemeContext';

const NavBar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme: 'dark' | 'light' | 'system') => {
    setTheme(newTheme);
  };

  return (
    <nav className="navbar">
      <h1 style={{ marginRight: 'auto' }}>Kärnhuset</h1>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => handleThemeChange('light')}>
          Light
        </button>
        <button onClick={() => handleThemeChange('dark')}>
          Dark
        </button>
        <button onClick={() => handleThemeChange('system')}>
          System
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
