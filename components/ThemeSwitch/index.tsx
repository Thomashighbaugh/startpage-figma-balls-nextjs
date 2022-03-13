import { useTheme } from 'next-themes';
import React from 'react';

/**
 * Based off of gatsby-theme-novela
 * https://github.com/narative/gatsby-theme-novela/blob/master/%40narative/gatsby-theme-novela/src/components/Navigation/Navigation.Header.tsx
 */

const ThemeSwitch = (): JSX.Element => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === 'dark';
  const color = isDark ? '#f1f1f1' : '#433455';
  const maskColor = isDark ? '#433455' : '#f4f4f7';
  return (
    <button
      className="theme-button bg-white bg-opacity-100 justify-right dark:bg-purple-500  dark:border-gray-50 dark:hover:text-gray-500 transform rotate-0 hover:rotate-12 transition-transform ease-linear  dark:text-gray-50 text-gray-500 "
      type="button"
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <div className="moon-or-sun" />
      <div className="moon-mask" />
      <style jsx>{`
        .theme-button {
          position: relative;
          border-radius: 8px;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .theme-button:hover {
          opacity: 1;
        }
        .moon-or-sun {
          position: relative;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: ${isDark ? '4px' : '2px'} solid;
          border-color: ${color};
          background: ${color};
          transform: scale(${isDark ? 0.5 : 1});
          transition: all 0.95s ease;
          overflow: ${isDark ? 'visible' : 'hidden'};
        }
        .moon-or-sun::before {
          content: '';
          position: absolute;
          right: -9px;
          top: -9px;
          height: 30px;
          width: 30px;
          border: 2px solid;
          border-color: ${color};
          border-radius: 50%;
          transform: translate(${isDark ? '14px, -14px' : '0, 0'});
          opacity: ${isDark ? 0 : 1};
          transition: transform 0.95s ease;
        }
        .moon-or-sun::after {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin: -4px 0 0 -4px;
          position: absolute;
          top: 50%;
          left: 50%;
          box-shadow: 0 -23px 0 ${color}, 0 23px 0 ${color}, 23px 0 0 ${color},
            -23px 0 0 ${color}, 15px 15px 0 ${color}, -15px 15px 0 ${color},
            15px -15px 0 ${color}, -15px -15px 0 ${color};
          transform: scale(${isDark ? 1 : 0});
          transition: all 0.95s ease;
        }
        .moon-mask {
          position: absolute;
          right: 4px;
          top: 4px;
          height: 23px;
          width: 23px;
          border-radius: 50%;
          opacity: 50%;
          border: 0;
          background: ${maskColor};
          transform: translate(${isDark ? '4px, -4px' : '0, 0'});
          opacity: ${isDark ? 0 : 1};
          transition: transform 0.95s ease;
        }
      `}</style>
    </button>
  );
};

export default ThemeSwitch;