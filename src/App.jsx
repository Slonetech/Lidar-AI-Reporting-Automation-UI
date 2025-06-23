import React, { useState } from 'react';
import { ThemeProvider } from './utils/ThemeContext';
import { ToastProvider } from './utils/ToastContext';
import Header from './components/Layout/Header';
import Navigation from './components/Layout/Navigation';
import Dashboard from './components/Dashboard';
import Reports from './components/Reports';
import Scheduling from './components/Scheduling';
import Validation from './components/Validation';
import Audit from './components/Audit';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'reports':
        return <Reports />;
      case 'scheduling':
        return <Scheduling />;
      case 'validation':
        return <Validation />;
      case 'audit':
        return <Audit />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-background text-text-primary transition-colors duration-300">
          <div className="flex">
            {/* Sidebar Navigation */}
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col">
              <Header />
              <main className="flex-1 p-6 overflow-auto">
                <div className="max-w-7xl mx-auto space-y-6">
                  {renderContent()}
                </div>
              </main>
            </div>
          </div>
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
