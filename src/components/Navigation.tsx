import { FC, memo } from 'react';

interface NavigationProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

const tabs = ['home', 'skills', 'projects', 'blog', 'services', 'journey', 'contact'];

const Navigation: FC<NavigationProps> = ({ activeTab, onTabClick }) => (
  <nav className="flex flex-wrap justify-center gap-4 mb-12" aria-label="Primary">
    {tabs.map((tab) => (
      <button
        key={tab}
        type="button"
        onClick={() => onTabClick(tab)}
        aria-current={activeTab === tab ? 'page' : undefined}
        className={`tab px-6 py-3 rounded-lg font-bold transition-all duration-200 ease-out motion-reduce:transition-none border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 ${
          activeTab === tab
            ? 'text-green-400 border-green-400 bg-green-400/20 shadow-lg shadow-green-400/30'
            : 'text-gray-400 border-gray-600 hover:border-cyan-400 hover:text-cyan-400'
        }`}
      >
        {tab.charAt(0).toUpperCase() + tab.slice(1)}
      </button>
    ))}
  </nav>
);

export default memo(Navigation);
