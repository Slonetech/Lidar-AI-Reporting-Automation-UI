import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  DollarSign, 
  Users, 
  AlertTriangle, 
  Clock, 
  Percent, 
  Calendar, 
  Brain, 
  Activity, 
  Shield, 
  BarChart3, 
  ArrowUpRight, 
  ArrowDownRight, 
  FileText,
  Eye,
  Download,
  RefreshCw
} from 'lucide-react';

const Dashboard = () => {
  const keyMetrics = [
    { 
      label: "Total Portfolio", 
      value: "KES 2.47B", 
      change: "+3.2% from last month", 
      type: "positive",
      icon: DollarSign,
      color: "from-emerald-500 to-teal-600"
    },
    { 
      label: "Active Members", 
      value: "14,256", 
      change: "+127 new members", 
      type: "positive",
      icon: Users,
      color: "from-blue-500 to-indigo-600"
    },
    { 
      label: "Loan Portfolio", 
      value: "KES 1.89B", 
      change: "+2.8% growth", 
      type: "positive",
      icon: TrendingUp,
      color: "from-purple-500 to-violet-600"
    },
    { 
      label: "Compliance Score", 
      value: "98.7%", 
      change: "+1.2% improvement", 
      type: "positive",
      icon: Shield,
      color: "from-emerald-500 to-green-600"
    },
  ];

  const aiInsights = [
    {
      title: "Loan Default Risk",
      value: "Low Risk",
      description: "Portfolio shows healthy risk distribution with 2.1% default probability",
      trend: "decreasing",
      percentage: "-0.3%",
      color: "emerald"
    },
    {
      title: "Member Churn Prediction",
      value: "Stable",
      description: "Member retention rate expected to remain strong at 94.2%",
      trend: "stable",
      percentage: "0.0%",
      color: "blue"
    },
    {
      title: "Growth Trends",
      value: "Positive",
      description: "Portfolio growth trajectory shows 8.7% annual increase",
      trend: "increasing",
      percentage: "+2.1%",
      color: "purple"
    }
  ];

  const systemHealth = [
    {
      metric: "System Uptime",
      value: "99.9%",
      status: "excellent",
      icon: Activity
    },
    {
      metric: "Data Sync Status",
      value: "Real-time",
      status: "excellent",
      icon: Clock
    },
    {
      metric: "Last Backup",
      value: "2 hours ago",
      status: "good",
      icon: Shield
    }
  ];

  const quickActions = [
    { label: "Generate Report", icon: FileText, color: "blue" },
    { label: "View Analytics", icon: BarChart3, color: "purple" },
    { label: "Validate Data", icon: Shield, color: "emerald" },
    { label: "Schedule Report", icon: Calendar, color: "indigo" },
  ];

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "increasing":
        return <ArrowUpRight className="w-4 h-4 text-emerald-600" />;
      case "decreasing":
        return <ArrowDownRight className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-slate-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "excellent":
        return "text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400";
      case "good":
        return "text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400";
      case "warning":
        return "text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400";
      default:
        return "text-slate-600 bg-slate-50 border-slate-200 dark:bg-slate-900/20 dark:border-slate-800 dark:text-slate-400";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="card card-hover">
        <div className="card-body">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-text-primary">Dashboard Overview</h2>
              <p className="text-text-secondary">Monitor your SACCO's performance and compliance metrics</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {keyMetrics.map((metric, index) => {
          const Icon = metric.icon;
          const getChangeIcon = () => {
            switch (metric.type) {
              case "positive":
                return <TrendingUp className="w-4 h-4 text-emerald-600" />;
              case "negative":
                return <TrendingDown className="w-4 h-4 text-red-600" />;
              default:
                return <Minus className="w-4 h-4 text-slate-400" />;
            }
          };

          return (
            <div
              key={index}
              className="card card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-body">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-br ${metric.color} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {getChangeIcon()}
                </div>
                
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-text-primary">{metric.value}</div>
                  <div className="text-sm text-text-secondary font-medium">{metric.label}</div>
                  <div className={`text-xs font-medium flex items-center gap-1 ${
                    metric.type === "positive" ? "text-emerald-600" : 
                    metric.type === "negative" ? "text-red-600" : "text-text-tertiary"
                  }`}>
                    {getChangeIcon()}
                    {metric.change}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Insights and System Health */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insights */}
        <div className="lg:col-span-2 card card-hover">
          <div className="card-header">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">AI-Powered Insights</h3>
            </div>
          </div>
          
          <div className="card-body">
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg border border-secondary-200 dark:border-secondary-700">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-text-primary">{insight.title}</h4>
                      {getTrendIcon(insight.trend)}
                    </div>
                    <p className="text-sm text-text-secondary mb-2">{insight.description}</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium text-${insight.color}-600`}>
                        {insight.value}
                      </span>
                      <span className="text-xs text-text-tertiary">({insight.percentage})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="card card-hover">
          <div className="card-header">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Activity className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary">System Health</h3>
            </div>
          </div>
          
          <div className="card-body">
            <div className="space-y-4">
              {systemHealth.map((health, index) => {
                const Icon = health.icon;
                return (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary-50 dark:bg-secondary-800/50 rounded-lg border border-secondary-200 dark:border-secondary-700">
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-text-secondary" />
                      <span className="text-sm text-text-primary">{health.metric}</span>
                    </div>
                    <span className={`text-sm font-medium px-2 py-1 rounded-full border ${getStatusColor(health.status)}`}>
                      {health.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card card-hover">
        <div className="card-header">
          <h3 className="text-lg font-semibold text-text-primary">Quick Actions</h3>
        </div>
        <div className="card-body">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={index}
                  className={`flex flex-col items-center gap-3 p-4 rounded-lg border border-secondary-200 dark:border-secondary-700 hover:border-${action.color}-300 hover:bg-${action.color}-50 dark:hover:bg-${action.color}-900/20 transition-all duration-300 group`}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br from-${action.color}-500 to-${action.color === 'blue' ? 'indigo' : action.color === 'purple' ? 'violet' : action.color}-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-text-primary text-center">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
