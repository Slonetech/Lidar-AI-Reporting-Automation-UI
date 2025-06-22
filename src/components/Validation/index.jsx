const stats = [
  { label: "Records Validated", value: "1,247", type: "success" },
  { label: "Warnings Found", value: "3", type: "warning" },
  { label: "Errors Detected", value: "1", type: "error" },
  { label: "Data Quality Score", value: "99.7%", type: "success" },
];

const validations = [
  {
    type: "success",
    title: "Portfolio Balance Reconciliation",
    message: "Total loan portfolio matches general ledger: KES 2.47B. All subsidiary accounts reconciled successfully.",
  },
  {
    type: "success",
    title: "Interest Calculation Verification",
    message: "All 14,256 active loans verified against approved interest rate schedules. No discrepancies found.",
  },
  {
    type: "warning",
    title: "Large Payment Anomaly Detected",
    message: "Loan Account #LN-45672: Payment of KES 1,200,000 exceeds 200% of monthly installment. Flagged for management review.",
  },
  {
    type: "success",
    title: "SASRA Classification Compliance",
    message: "All loan classifications verified against SASRA prudential guidelines. 98.7% performing, 1.3% non-performing within acceptable limits.",
  },
  {
    type: "warning",
    title: "KYC Documentation Review Required",
    message: "Client #CL-23456: KYC documents expire within 30 days. Automatic renewal notice sent to relationship manager.",
  },
  {
    type: "error",
    title: "Missing Collateral Valuation",
    message: "Loan #LN-78901: Collateral revaluation overdue by 15 days. Report generation blocked until valuation is updated.",
  },
  {
    type: "warning",
    title: "Provision Calculation Alert",
    message: "3 accounts show unusual provision requirements. Automatic escalation sent to credit risk department.",
  },
  {
    type: "success",
    title: "Regulatory Limit Compliance",
    message: "All exposure limits within SASRA requirements. Single borrower limit: 15.2% (Max: 25%), Large exposure: 82.3% (Max: 800%).",
  },
];

const Validation = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Data Validation & Accuracy Checks</h2>
      <p className="text-gray-600 mb-6">Built-in logic ensures clean data and flags inconsistencies.</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`border-l-4 p-4 rounded shadow-sm ${
              stat.type === "success"
                ? "border-green-500"
                : stat.type === "warning"
                ? "border-yellow-500"
                : "border-red-500"
            } bg-white`}
          >
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Validation List */}
      <div className="space-y-4">
        {validations.map((item, i) => (
          <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 border border-gray-200 rounded">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white ${
                item.type === "success"
                  ? "bg-green-500"
                  : item.type === "warning"
                  ? "bg-yellow-500 text-black"
                  : "bg-red-500"
              }`}
            >
              {item.type === "success" ? "✓" : item.type === "warning" ? "!" : "×"}
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Validation;
