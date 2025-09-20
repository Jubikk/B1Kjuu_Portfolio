import { Sun, Moon } from 'lucide-react'

const ThemeToggle = ({theme,toggleTheme}) => {
  return (
    <>
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-lg border border-gray-300 dark:border-gray-600">
        <Sun className="text-yellow-500" size={18} />
        <button
          onClick={toggleTheme}
          className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
            theme === 'dark' ? 'bg-blue-600' : 'bg-gray-300'
          }`}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          <div
            className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
              theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
            }`}
          />
        </button>
        <Moon className="text-blue-400" size={18} />
      </div>

      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300"></div>
      </>
  );


}

export default ThemeToggle