const logs = [
  {
    datetime: "2024-06-19 09:15:23",
    action: "Generate",
    report: "SASRA Monthly Report - June 2024",
    user: "Finance Manager",
    status: "Success",
    details: "Report generated and validated",
  },
  {
    datetime: "2024-06-19 09:16:45",
    action: "Distribute",
    report: "SASRA Monthly Report - June 2024",
    user: "System",
    status: "Success",
    details: "Sent to SASRA portal and board members",
  },
  {
    datetime: "2024-06-18 14:30:12",
    action: "Validate",
    report: "Portfolio Data Validation",
    user: "System",
    status: "Warning",
    details: "3 warnings found, 1 error detected",
  },
  {
    datetime: "2024-06-17 16:22:33",
    action: "Generate",
    report: "Weekly Management Dashboard",
    user: "System",
    status: "Success",
    details: "Automated weekly report",
  },
];

const statusColor = {
  Success: "text-green-600",
  Warning: "text-yellow-600",
  Error: "text-red-600",
};

const actionColor = {
  Generate: "bg-blue-100 text-blue-800",
  Distribute: "bg-green-100 text-green-800",
  Validate: "bg-purple-100 text-purple-800",
};

const AuditTrail = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Audit-Ready Documentation</h2>
      <p className="text-gray-600 mb-6">Complete audit trail with organized documentation for regulatory reviews.</p>

      <div className="overflow-auto">
        <table className="w-full table-auto text-sm border">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-2 text-left border-b">Date & Time</th>
              <th className="p-2 text-left border-b">Action</th>
              <th className="p-2 text-left border-b">Report</th>
              <th className="p-2 text-left border-b">User</th>
              <th className="p-2 text-left border-b">Status</th>
              <th className="p-2 text-left border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="p-2">{log.datetime}</td>
                <td className="p-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${actionColor[log.action]}`}>
                    {log.action}
                  </span>
                </td>
                <td className="p-2">{log.report}</td>
                <td className="p-2">{log.user}</td>
                <td className={`p-2 font-medium ${statusColor[log.status]}`}>{log.status}</td>
                <td className="p-2">{log.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Export Audit Log</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Generate Audit Report</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Archive Old Records</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">System Backup Status</button>
      </div>
    </div>
  );
};

export default AuditTrail;
