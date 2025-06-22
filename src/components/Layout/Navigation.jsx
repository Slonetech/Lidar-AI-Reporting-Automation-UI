const tabs = [
  { id: 'reports', label: 'Generate Reports' },
  { id: 'dashboard', label: 'Real-Time Dashboard' },
  { id: 'scheduling', label: 'Automated Scheduling' },
  { id: 'validation', label: 'Data Validation' },
  { id: 'audit', label: 'Audit Trail' },
];

const NavTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-white rounded-lg shadow mb-6 px-4 py-3 flex flex-wrap gap-2 border-b">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-2 rounded font-medium transition-all duration-300
            ${activeTab === tab.id
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default NavTabs;
