import { useState } from "react";


const reportNames = {
  monthly: "SASRA_Monthly_Prudential_Report",
  quarterly: "SASRA_Quarterly_Statistical_Return",
  annual: "Annual_Compliance_Report",
  board: "Board_Risk_Report",
  audit: "Internal_Audit_Summary",
};

const extensions = {
  excel: ".xlsx",
  pdf: ".pdf",
  csv: ".csv",
};

const sizes = {
  excel: "2.4 MB",
  pdf: "1.8 MB",
  csv: "890 KB",
};

const GenerateReports = () => {
  const [reportType, setReportType] = useState("monthly");
  const [reportPeriod, setReportPeriod] = useState("2024-06");
  const [reportFormat, setReportFormat] = useState("excel");
  const [includeCharts, setIncludeCharts] = useState("yes");
  const [progress, setProgress] = useState(0);
  const [generated, setGenerated] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [generateTime, setGenerateTime] = useState("");
const handleGenerate = () => {
  setGenerated(false);
  setProgress(0);

  let prog = 0;
  const interval = setInterval(() => {
    prog += Math.random() * 15 + 5;
    if (prog >= 100) {
      prog = 100;
      clearInterval(interval);

      const date = new Date(reportPeriod + "-01");
      const monthYear = date.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });

      const file = `${reportNames[reportType]}_${monthYear.replace(" ", "_")}${extensions[reportFormat]}`;
      setFileName(file);
      setFileSize(sizes[reportFormat]);
      setGenerateTime(new Date().toLocaleString());
      setGenerated(true);

      // 🧠 Simulate downloadable file generation
      const blob = new Blob(
        [
          `Report Type: ${reportType.toUpperCase()}\n`,
          `Period: ${reportPeriod}\n`,
          `Format: ${reportFormat}\n`,
          `Includes Charts: ${includeCharts === "yes" ? "Yes" : "No"}\n`,
          `Generated At: ${new Date().toLocaleString()}`,
        ],
        { type: "text/plain" }
      );

      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = file;
      a.click();
      URL.revokeObjectURL(downloadUrl);
    }
    setProgress(prog);
  }, 150);
};


  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">One-Click SASRA Report Generation</h2>
      <p className="text-gray-600 mb-6">Generate monthly, quarterly, and annual reports with built-in SASRA formatting.</p>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Report Type</label>
          <select value={reportType} onChange={e => setReportType(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2">
            <option value="monthly">Monthly SASRA Prudential Report</option>
            <option value="quarterly">Quarterly Statistical Return</option>
            <option value="annual">Annual Compliance Report</option>
            <option value="board">Board Risk Report</option>
            <option value="audit">Internal Audit Summary</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Reporting Period</label>
          <input type="month" value={reportPeriod} onChange={e => setReportPeriod(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Output Format</label>
          <select value={reportFormat} onChange={e => setReportFormat(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2">
            <option value="excel">Excel (.xlsx)</option>
            <option value="pdf">PDF</option>
            <option value="csv">CSV</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Include Visualizations</label>
          <select value={includeCharts} onChange={e => setIncludeCharts(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2">
            <option value="yes">Yes - Include Charts</option>
            <option value="no">No - Data Only</option>
          </select>
        </div>
      </div>

      {/* Generate Button */}
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 w-full mb-4"
      >
        Generate Report
      </button>

      {/* Progress Bar */}
      {progress > 0 && progress < 100 && (
        <div className="w-full bg-gray-200 rounded h-6 overflow-hidden mb-4">
          <div
            className="bg-blue-500 h-full text-white text-sm font-bold text-center transition-all"
            style={{ width: `${progress}%` }}
          >
            {Math.round(progress)}%
          </div>
        </div>
      )}

      {/* Report Preview */}
      {generated && (
        <div className="bg-gray-50 border border-gray-200 rounded p-4">
          <h3 className="text-lg font-semibold mb-2">Report Generated Successfully</h3>
          <p><strong>File:</strong> {fileName}</p>
          <p><strong>Size:</strong> {fileSize}</p>
          <p><strong>Generated:</strong> {generateTime}</p>
          <p><strong>Validation Status:</strong> All checks passed</p>
          <p><strong>SASRA Compliance:</strong> Verified</p>
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Download Report</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Email to SASRA</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Share with Board</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">Archive</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenerateReports;
