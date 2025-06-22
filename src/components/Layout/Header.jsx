const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-blue-700 to-blue-500 shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
          Lidar AI - Reporting Automation
        </h1>
        <div className="mt-2 sm:mt-0 text-sm flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-100">System Online</span>
          </div>
          <div className="text-gray-200">
            Admin User | Last Login: Today 08:30
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
