
import { Moon, Sun } from "lucide-react";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const DarkModeToggle = ({ isDarkMode, onToggle }: DarkModeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-yellow-500" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
};

export default DarkModeToggle;
