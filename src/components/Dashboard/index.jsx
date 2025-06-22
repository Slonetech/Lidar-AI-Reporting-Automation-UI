const metrics = [
  { label: "Total Loan Portfolio", value: "KES 2.47B", change: "+3.2% from last month", type: "positive" },
  { label: "Active Loan Accounts", value: "14,256", change: "+127 new accounts", type: "positive" },
  { label: "Portfolio at Risk (PAR-30)", value: "3.1%", change: "+0.3% from target", type: "negative" },
  { label: "Monthly Disbursements", value: "KES 52.3M", change: "+8.7% from last month", type: "positive" },
  { label: "Collection Efficiency", value: "97.8%", change: "+1.2% improvement", type: "positive" },
  { label: "Monthly Repayments", value: "KES 48.1M", change: "On target", type: "neutral" },
  { label: "Average Interest Rate", value: "12.5%", change: "Stable", type: "neutral" },
  { label: "Average Loan Term (Months)", value: "18.2", change: "Within policy", type: "neutral" },
];

const Dashboard = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Real-Time Portfolio Dashboard</h2>
      <p className="text-gray-600 mb-6">Live portfolio metrics </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="border-l-4 bg-white rounded-md shadow-sm p-4"
            style={{
              borderColor:
                metric.type === "positive"
                  ? "#27ae60"
                  : metric.type === "negative"
                  ? "#e74c3c"
                  : "#ccc",
            }}
          >
            <div className="text-2xl font-bold text-gray-800">{metric.value}</div>
            <div className="text-sm uppercase text-gray-500">{metric.label}</div>
            <div
              className={`text-xs mt-1 ${
                metric.type === "positive"
                  ? "text-green-600"
                  : metric.type === "negative"
                  ? "text-red-600"
                  : "text-gray-500"
              }`}
            >
              {metric.change}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Export Dashboard PDF</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Schedule Email Report</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Refresh Data</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Historical View</button>
      </div>
    </div>
  );
};

export default Dashboard;
