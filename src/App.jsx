import { useState } from 'react';
import Header from './components/Layout/Header';
import NavTabs from './components/Layout/Navigation';
import GenerateReports from './components/Reports';
import Dashboard from './components/Dashboard';
import Scheduling from './components/Scheduling';
import Validation from './components/Validation';
import AuditTrail from './components/Audit';



function App() {
  const [activeTab, setActiveTab] = useState('reports');

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto p-4">
        <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Section placeholders */}
        {activeTab === 'reports' && <GenerateReports />}

        {activeTab === 'dashboard' && <Dashboard />}

        {activeTab === 'scheduling' && <Scheduling />}

        {activeTab === 'validation' && <Validation />}

        {activeTab === 'audit' && <AuditTrail />}

      </main>
    </div>
  );
}

export default App;
