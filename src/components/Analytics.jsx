import React, { useState } from 'react';
import { Download, BarChart3, LineChart, Calendar, FileText } from 'lucide-react';
import { useToast } from '../utils/ToastContext';

const dummyLineData = [10, 20, 18, 25, 30, 28, 35, 40, 38, 45, 50, 48];
const dummyBarData = [12, 18, 22, 15, 30, 25, 20];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const categories = ['Loans', 'Savings', 'Members', 'Revenue', 'Expenses', 'Compliance', 'Defaults'];

const chartTypes = [
  { value: 'line', label: 'Line Chart', icon: LineChart },
  { value: 'bar', label: 'Bar Chart', icon: BarChart3 },
];
const metrics = [
  { value: 'portfolio', label: 'Portfolio Growth' },
  { value: 'members', label: 'Active Members' },
  { value: 'compliance', label: 'Compliance Score' },
];
const ranges = [
  { value: '6m', label: 'Last 6 Months' },
  { value: '12m', label: 'Last 12 Months' },
  { value: 'ytd', label: 'Year to Date' },
];

const AnalyticsPlaceholder = ({ compact = false }) => {
  const { showToast } = useToast();
  const [chartType, setChartType] = useState('line');
  const [metric, setMetric] = useState('portfolio');
  const [range, setRange] = useState('12m');

  const handleExport = (type) => {
    showToast(`Analytics exported as ${type.toUpperCase()} (dummy)`, { type: 'success' });
  };

  // SVG chart dimensions
  const width = compact ? 320 : 600;
  const height = compact ? 120 : 260;
  const padding = 32;
  // Line chart points
  const linePoints = dummyLineData.map((v, i) => [
    padding + (i * (width - 2 * padding)) / (dummyLineData.length - 1),
    height - padding - ((v - 10) * (height - 2 * padding)) / 40
  ]);
  // Bar chart bars
  const barWidth = (width - 2 * padding) / dummyBarData.length - 8;

  return (
    <div className={`w-full ${compact ? '' : 'max-w-2xl mx-auto'} flex flex-col gap-4`}>
      {/* Controls */}
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <div className="flex gap-2">
          {chartTypes.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.value}
                className={`btn btn-secondary px-3 py-1 ${chartType === c.value ? 'ring-2 ring-primary-500' : ''}`}
                onClick={() => setChartType(c.value)}
              >
                <Icon className="w-4 h-4" /> {c.label}
              </button>
            );
          })}
        </div>
        <div className="flex gap-2">
          <select className="form-select" value={metric} onChange={e => setMetric(e.target.value)}>
            {metrics.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
          </select>
          <select className="form-select" value={range} onChange={e => setRange(e.target.value)}>
            {ranges.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-outline" onClick={() => handleExport('csv')}><FileText className="w-4 h-4" /> Export CSV</button>
          <button className="btn btn-outline" onClick={() => handleExport('png')}><Download className="w-4 h-4" /> Export Image</button>
        </div>
      </div>
      {/* Chart Area */}
      <div className={`rounded-xl border border-secondary-200 dark:border-secondary-700 bg-background-secondary dark:bg-secondary-800 shadow-inner flex items-center justify-center ${compact ? 'h-40' : 'h-72'}`} style={{ minHeight: height }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          {/* Axes */}
          <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#bbb" strokeWidth="1.5" />
          <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#bbb" strokeWidth="1.5" />
          {/* Chart */}
          {chartType === 'line' && (
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              points={linePoints.map(([x, y]) => `${x},${y}`).join(' ')}
              style={{ filter: 'drop-shadow(0 2px 6px #3b82f655)' }}
            />
          )}
          {chartType === 'bar' && dummyBarData.map((v, i) => (
            <rect
              key={i}
              x={padding + i * ((width - 2 * padding) / dummyBarData.length)}
              y={height - padding - ((v - 10) * (height - 2 * padding)) / 30}
              width={barWidth}
              height={((v - 10) * (height - 2 * padding)) / 30}
              fill="#6366f1"
              rx={4}
              style={{ filter: 'drop-shadow(0 2px 6px #6366f155)' }}
            />
          ))}
          {/* X axis labels */}
          {(chartType === 'line' ? months.slice(0, dummyLineData.length) : categories).map((label, i) => (
            <text
              key={label}
              x={padding + i * ((width - 2 * padding) / ((chartType === 'line' ? dummyLineData.length : dummyBarData.length) - 1))}
              y={height - padding + 18}
              textAnchor="middle"
              fontSize="12"
              fill="#888"
            >
              {label}
            </text>
          ))}
        </svg>
      </div>
      <div className="text-xs text-text-tertiary text-center mt-2">(This is a demo placeholder. No real data.)</div>
    </div>
  );
};

export default AnalyticsPlaceholder; 