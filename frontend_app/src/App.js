import React, { useState, useEffect } from 'react';
import './App.css';

// Icons via SVG for minimal dependencies
const MenuIcon = ({ open }) => (
  <svg height="28" width="28" viewBox="0 0 24 24" fill="none">
    <rect y="5" width="24" height="2" rx="1" fill={open ? "#2563eb" : "#282c34"}/>
    <rect y="11" width="24" height="2" rx="1" fill={open ? "#2563eb" : "#282c34"}/>
    <rect y="17" width="24" height="2" rx="1" fill={open ? "#2563eb" : "#282c34"}/>
  </svg>
);

// PUBLIC_INTERFACE
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // PUBLIC_INTERFACE
  const toggleSidebar = () => {
    setSidebarOpen(open => !open);
  };

  return (
    <div className={`dashboard-root${sidebarOpen ? ' sidebar-open' : ''}`}>
      {/* Top Navigation Bar */}
      <header className="dashboard-nav shadow-sm">
        <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
          <MenuIcon open={sidebarOpen}/>
        </button>
        <span className="dashboard-title">GoalMap Dashboard</span>
        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
          {/* User/Avatar placeholder */}
          <span className="avatar-circle">U</span>
        </div>
      </header>
      
      {/* Sidebar */}
      <nav className={`dashboard-sidebar shadow-md${sidebarOpen ? ' open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-logo">GM</span>
        </div>
        <ul>
          <li className="active"><span>🏠</span> Dashboard</li>
          <li><span>🎯</span> Goals</li>
          <li><span>🗺️</span> Roadmaps</li>
          <li><span>📈</span> Progress</li>
          <li><span>⚙️</span> Settings</li>
        </ul>
        <div className="sidebar-footer">
          <button className="sidebar-signout">Sign Out</button>
        </div>
      </nav>
      
      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && <div className="backdrop" onClick={toggleSidebar} aria-label="Close sidebar"></div>}
      
      {/* Main Content Area */}
      <main className="dashboard-main">
        <section className="welcome-card shadow-lg">
          <h1>Welcome to GoalMap</h1>
          <p className="muted">Start visualizing and tracking your goals and roadmaps with a beautiful, modern dashboard.</p>
        </section>
        <section className="dashboard-widgets">
          <div className="widget-card shadow-md">
            <h2>🎯 Goals</h2>
            <p>Create, edit, and review your goals in a clear list.</p>
          </div>
          <div className="widget-card shadow-md">
            <h2>🗺️ Roadmap Editor</h2>
            <p>Visually map your goals and milestones with drag-and-drop ease.</p>
          </div>
          <div className="widget-card shadow-md">
            <h2>📈 Progress</h2>
            <p>Track completion and see your journey at a glance.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
