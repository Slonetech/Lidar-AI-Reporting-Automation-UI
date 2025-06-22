const schedules = [
  {
    title: "Monthly SASRA Prudential Reports",
    details: [
      "Auto-generates: 5th of each month at 06:00",
      "Distribution: SASRA Portal, Board Chair, CFO",
      "Next run: July 5, 2024",
    ],
    status: "Active",
    lastRun: "Success",
  },
  {
    title: "Quarterly Board Risk Reports",
    details: [
      "Auto-generates: Last Friday of quarter at 14:00",
      "Distribution: All board members, Risk Committee",
      "Next run: September 27, 2024",
    ],
    status: "Active",
    lastRun: "Success",
  },
  {
    title: "Weekly Management Dashboard",
    details: [
      "Auto-generates: Every Monday at 08:00",
      "Distribution: Management team, Department heads",
      "Next run: July 1, 2024",
    ],
    status: "Active",
    lastRun: "Success",
  },
  {
    title: "Annual Compliance Report",
    details: [
      "Auto-generates: January 15th at 10:00",
      "Distribution: SASRA, Board, External Auditors",
      "Next run: January 15, 2025",
    ],
    status: "Scheduled",
    lastRun: "Never run",
  },
];

const Scheduling = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Automated Report Scheduling</h2>
      <p className="text-gray-600 mb-6">Automated generation and distribution to stakeholders.</p>

      <div className="space-y-4 mb-6">
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className="flex justify-between items-start border-l-4 bg-gray-50 p-4 rounded"
            style={{
              borderColor: schedule.status === "Active" ? "#27ae60" : "#f1c40f",
            }}
          >
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-1">{schedule.title}</h4>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                {schedule.details.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
            <div className="text-right text-sm">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  schedule.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {schedule.status}
              </span>
              <div className="mt-1 text-gray-500">Last run: {schedule.lastRun}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add New Schedule</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Edit Schedules</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">View Distribution Lists</button>
        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Test Run</button>
      </div>
    </div>
  );
};

export default Scheduling;
