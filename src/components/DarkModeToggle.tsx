import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../store/themeStore';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 transform rotate-0 scale-100" />
      ) : (
        <Moon className="w-5 h-5 text-gray-700 transition-transform duration-300 transform rotate-0 scale-100" />
      )}
    </button>
  );
}
