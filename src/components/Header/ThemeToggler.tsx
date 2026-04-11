'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <style jsx>{`
        @keyframes toggle {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(24px);
          }
        }

        @keyframes reverseToggle {
          0% {
            transform: translateX(24px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes iconFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.8) rotate(-180deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        @keyframes iconFadeOut {
          0% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: scale(0.8) rotate(180deg);
          }
        }

        .theme-toggle {
          position: relative;
          width: 56px;
          height: 28px;
          background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
          border: 2px solid #e5e5e5;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-flex;
          align-items: center;
          padding: 2px;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
        }

        .theme-toggle:hover {
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.08), 0 0 8px rgba(21, 110, 176, 0.1);
        }

        .theme-toggle.dark {
          background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
          border-color: #4a5568;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .theme-toggle.dark:hover {
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(21, 110, 176, 0.2);
        }

        .toggle-thumb {
          position: absolute;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          left: 2px;
        }

        .theme-toggle.dark .toggle-thumb {
          animation: toggle 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          background: linear-gradient(135deg, #1a202c 0%, #0f1419 100%);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        .theme-toggle:not(.dark) .toggle-thumb {
          animation: reverseToggle 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .toggle-icon {
          width: 12px;
          height: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .sun-icon {
          color: #fbbf24;
          animation: iconFadeIn 0.3s ease forwards;
        }

        .moon-icon {
          color: #3b82f6;
          animation: iconFadeIn 0.3s ease forwards;
        }

        .theme-toggle.dark .sun-icon {
          animation: iconFadeOut 0.3s ease forwards;
        }

        .theme-toggle:not(.dark) .moon-icon {
          animation: iconFadeOut 0.3s ease forwards;
        }
      `}</style>

      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle theme"
        className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
        title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <div className="toggle-thumb">
          <div className="toggle-icon sun-icon">
            {theme !== 'dark' && (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m3.08 3.08l4.24 4.24M1 12h6m6 0h6m-15.78 7.78l4.24-4.24m3.08-3.08l4.24-4.24" />
              </svg>
            )}
          </div>
          <div className="toggle-icon moon-icon">
            {theme === 'dark' && (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </div>
        </div>
      </button>
    </>
  );
};

export default ThemeToggler;