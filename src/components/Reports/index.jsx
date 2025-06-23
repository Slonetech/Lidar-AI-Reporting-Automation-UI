import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  Calendar, 
  BarChart3, 
  PieChart, 
  TrendingUp,
  Users,
  DollarSign,
  Shield,
  CheckCircle,
  AlertCircle,
  Clock,
  Send,
  Settings,
  Filter
} from 'lucide-react';

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState('');
  const [reportPeriod, setReportPeriod] = useState('monthly');
  const [reportFormat, setReportFormat] = useState('pdf');
  const [includeVisualizations, setIncludeVisualizations] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const reportTypes = [
    {
      id: 'portfolio-summary',
      name: 'Portfolio Summary Report',
      description: 'Comprehensive overview of loan portfolio performance',
      icon: BarChart3,
      category: 'Portfolio'
    },
    {
      id: 'member-analysis',
      name: 'Member Analysis Report',
      description: 'Detailed member demographics and behavior analysis',
      icon: Users,
      category: 'Members'
    },
    {
      id: 'financial-performance',
      name: 'Financial Performance Report',
      description: 'Revenue, expenses, and profitability analysis',
      icon: DollarSign,
      category: 'Financial'
    },
    {
      id: 'compliance-report',
      name: 'Compliance Report',
      description: 'Regulatory compliance and risk assessment',
      icon: Shield,
      category: 'Compliance'
    },
    {
      id: 'trend-analysis',
      name: 'Trend Analysis Report',
      description: 'Historical trends and forecasting',
      icon: TrendingUp,
      category: 'Analytics'
    },
    {
      id: 'custom-report',
      name: 'Custom Report',
      description: 'Build your own report with custom parameters',
      icon: Settings,
      category: 'Custom'
    }
  ];

  const periods = [
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly', label: 'Yearly' },
    { value: 'custom', label: 'Custom Range' }
  ];

  const formats = [
    { value: 'pdf', label: 'PDF Document', icon: FileText },
    { value: 'excel', label: 'Excel Spreadsheet', icon: BarChart3 },
    { value: 'csv', label: 'CSV Data', icon: PieChart }
  ];

  const handleGenerateReport = async () => {
    if (!selectedReport) return;
    
    setIsGenerating(true);
    setProgress(0);
    
    // Simulate report generation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="card card-hover">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Report Generation</h2>
              <p className="text-text-secondary">Create and manage comprehensive SASRA compliance reports</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Report Type Selection */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-text-primary">Select Report Type</h3>
            </div>
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reportTypes.map((report) => {
                  const Icon = report.icon;
                  const isSelected = selectedReport === report.id;
                  
                  return (
                    <button
                      key={report.id}
                      onClick={() => setSelectedReport(report.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        isSelected
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800/50'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          isSelected 
                            ? 'bg-primary-500 text-white' 
                            : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-medium text-sm ${
                              isSelected ? 'text-primary-900 dark:text-primary-100' : 'text-text-primary'
                            }`}>
                              {report.name}
                            </h4>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              isSelected 
                                ? 'bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200'
                                : 'bg-secondary-100 text-secondary-600 dark:bg-secondary-800 dark:text-secondary-400'
                            }`}>
                              {report.category}
                            </span>
                          </div>
                          <p className={`text-xs ${
                            isSelected ? 'text-primary-700 dark:text-primary-300' : 'text-text-secondary'
                          }`}>
                            {report.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Report Configuration */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-text-primary">Report Configuration</h3>
            </div>
            <div className="card-body space-y-6">
              {/* Period Selection */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Report Period
                </label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {periods.map((period) => (
                    <button
                      key={period.value}
                      onClick={() => setReportPeriod(period.value)}
                      className={`px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                        reportPeriod === period.value
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-900 dark:text-primary-100'
                          : 'border-secondary-200 dark:border-secondary-700 text-text-secondary hover:border-primary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800/50'
                      }`}
                    >
                      {period.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Format Selection */}
              <div>
                <label className="block text-sm font-medium text-text-primary mb-3">
                  Output Format
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {formats.map((format) => {
                    const Icon = format.icon;
                    return (
                      <button
                        key={format.value}
                        onClick={() => setReportFormat(format.value)}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                          reportFormat === format.value
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                            : 'border-secondary-200 dark:border-secondary-700 hover:border-primary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800/50'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${
                          reportFormat === format.value 
                            ? 'text-primary-600 dark:text-primary-400' 
                            : 'text-secondary-500 dark:text-secondary-400'
                        }`} />
                        <span className={`font-medium ${
                          reportFormat === format.value 
                            ? 'text-primary-900 dark:text-primary-100' 
                            : 'text-text-primary'
                        }`}>
                          {format.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Options */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="visualizations"
                    checked={includeVisualizations}
                    onChange={(e) => setIncludeVisualizations(e.target.checked)}
                    className="form-checkbox"
                  />
                  <label htmlFor="visualizations" className="text-sm text-text-primary">
                    Include charts and visualizations
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview and Actions */}
        <div className="space-y-6">
          {/* Report Preview */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-text-primary">Report Preview</h3>
            </div>
            <div className="card-body">
              {selectedReport ? (
                <div className="space-y-4">
                  <div className="p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg border border-secondary-200 dark:border-secondary-700">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-secondary-500" />
                      <span className="text-sm font-medium text-text-primary">
                        {reportTypes.find(r => r.id === selectedReport)?.name}
                      </span>
                    </div>
                    <div className="text-xs text-text-secondary space-y-1">
                      <div>Period: {periods.find(p => p.value === reportPeriod)?.label}</div>
                      <div>Format: {formats.find(f => f.value === reportFormat)?.label}</div>
                      <div>Visualizations: {includeVisualizations ? 'Included' : 'Excluded'}</div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleGenerateReport}
                    disabled={isGenerating}
                    className="btn btn-primary w-full"
                  >
                    {isGenerating ? (
                      <>
                        <div className="spinner w-4 h-4"></div>
                        Generating Report...
                      </>
                    ) : (
                      <>
                        <FileText className="w-4 h-4" />
                        Generate Report
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="w-12 h-12 text-secondary-400 mx-auto mb-3" />
                  <p className="text-text-secondary">Select a report type to preview</p>
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          {isGenerating && (
            <div className="card card-hover">
              <div className="card-body">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-text-primary">Generating Report</span>
                </div>
                <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="text-xs text-text-secondary mt-2">{progress}% complete</div>
              </div>
            </div>
          )}

          {/* Recent Reports */}
          <div className="card card-hover">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-text-primary">Recent Reports</h3>
            </div>
            <div className="card-body">
              <div className="space-y-3">
                {[
                  { name: 'Portfolio Summary', date: '2024-01-15', status: 'completed' },
                  { name: 'Member Analysis', date: '2024-01-14', status: 'completed' },
                  { name: 'Compliance Report', date: '2024-01-13', status: 'completed' }
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg">
                    <div>
                      <div className="text-sm font-medium text-text-primary">{report.name}</div>
                      <div className="text-xs text-text-secondary">{report.date}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success-600" />
                      <button className="p-1 hover:bg-secondary-200 dark:hover:bg-secondary-700 rounded">
                        <Download className="w-4 h-4 text-secondary-600" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
