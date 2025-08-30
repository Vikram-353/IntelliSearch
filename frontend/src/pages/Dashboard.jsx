import React, { useState } from "react";
import {
  Search,
  FileText,
  Brain,
  TrendingUp,
  Activity,
  Database,
  Zap,
  CheckCircle,
  AlertTriangle,
  Clock,
  BarChart3,
  Target,
  Layers,
} from "lucide-react";

const Dashboard = () => {
  const [activeStage, setActiveStage] = useState(1);

  const systemStats = [
    {
      title: "Documents Indexed",
      value: "15,847",
      change: "+234 today",
      changeType: "positive",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Queries Processed",
      value: "8,923",
      change: "+156 today",
      changeType: "positive",
      icon: Search,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      title: "Avg Response Time",
      value: "1.2s",
      change: "-0.3s improved",
      changeType: "positive",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Retrieval Accuracy",
      value: "94.7%",
      change: "+2.1%",
      changeType: "positive",
      icon: Target,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const performanceMetrics = [
    { name: "Precision@k", score: "92.3%", weight: "20%" },
    { name: "Recall@k", score: "89.7%", weight: "50%" },
    { name: "NDCG", score: "91.2%", weight: "30%" },
    { name: "ROUGE Score", score: "87.4%", weight: "25%" },
    { name: "METEOR Score", score: "85.1%", weight: "15%" },
    { name: "Hallucination Rate", score: "3.2%", weight: "60%" },
  ];

  const recentQueries = [
    {
      id: 1,
      query: "COVID-19 vaccine effectiveness studies",
      status: "completed",
      documents: 5,
      time: "2 minutes ago",
    },
    {
      id: 2,
      query: "EU legislation on data privacy",
      status: "processing",
      documents: 12,
      time: "5 minutes ago",
    },
    {
      id: 3,
      query: "Multi-hop reasoning patterns",
      status: "completed",
      documents: 8,
      time: "10 minutes ago",
    },
    {
      id: 4,
      query: "APT threat intelligence summary",
      status: "completed",
      documents: 15,
      time: "15 minutes ago",
    },
  ];

  const datasets = [
    { name: "CORD-19", status: "active", size: "2.1 GB" },
    { name: "WikiHop", status: "active", size: "1.5 GB" },
    { name: "HotpotQA", status: "active", size: "0.8 GB" },
    { name: "EU-Legislation", status: "active", size: "3.2 GB" },
    { name: "APT Notes", status: "active", size: "0.6 GB" },
    { name: "RobustQA", status: "processing", size: "1.2 GB" },
  ];

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <img
                className="w-10 h-10 text-blue-600"
                src="./logo.svg"
                alt="logo"
              />
              IntelliSearch RAG System
            </h1>
            <p className="text-gray-600">
              Retrieval Augmented Generation for Document Intelligence
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Current Stage</p>
              <p className="text-lg font-semibold text-blue-600">
                Stage {activeStage}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300 hover:scale-102"
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Metrics */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Evaluation Metrics
            </h2>
            <BarChart3 className="w-5 h-5 text-gray-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {performanceMetrics.map((metric, index) => (
              <div
                key={metric.name}
                className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {metric.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    Weight: {metric.weight}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: metric.score }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {metric.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Queries */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Queries
            </h2>
            <Activity className="w-5 h-5 text-gray-500" />
          </div>

          <div className="space-y-4">
            {recentQueries.map((query) => (
              <div
                key={query.id}
                className="p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {query.status === "completed" ? (
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Clock className="w-4 h-4 text-yellow-500" />
                    )}
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        query.status === "completed"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-yellow-50 text-yellow-600"
                      }`}
                    >
                      {query.status}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{query.time}</span>
                </div>
                <p className="text-sm text-gray-900 mb-1">{query.query}</p>
                <p className="text-xs text-gray-500">
                  {query.documents} documents retrieved
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View query history →
            </button>
          </div>
        </div>
      </div>

      {/* Dataset Status & Stage Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dataset Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Dataset Status
            </h2>
            <Database className="w-5 h-5 text-gray-500" />
          </div>

          <div className="space-y-3">
            {datasets.map((dataset, index) => (
              <div
                key={dataset.name}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      dataset.status === "active"
                        ? "bg-emerald-500"
                        : "bg-yellow-500"
                    }`}
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {dataset.name}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-900">{dataset.size}</p>
                  <p className="text-xs text-gray-500 capitalize">
                    {dataset.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stage Progress */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Challenge Progress
            </h2>
            <Layers className="w-5 h-5 text-gray-500" />
          </div>

          <div className="space-y-4">
            {[
              {
                stage: 1,
                title: "Retrieval Focus",
                duration: "3 months",
                status: "current",
                description: "Document retrieval optimization",
              },
              {
                stage: 2,
                title: "Retrieval + Generation",
                duration: "4 months",
                status: "upcoming",
                description: "Combined RAG pipeline",
              },
              {
                stage: 3,
                title: "Multi-turn Generation",
                duration: "5 months",
                status: "upcoming",
                description: "Advanced conversational QA",
              },
            ].map((stage) => (
              <div
                key={stage.stage}
                className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                  stage.status === "current"
                    ? "border-blue-500 bg-blue-50"
                    : stage.status === "upcoming"
                    ? "border-gray-200 bg-gray-50"
                    : "border-emerald-200 bg-emerald-50"
                }`}
                onClick={() => setActiveStage(stage.stage)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">
                    Stage {stage.stage}: {stage.title}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      stage.status === "current"
                        ? "bg-blue-100 text-blue-600"
                        : stage.status === "upcoming"
                        ? "bg-gray-100 text-gray-600"
                        : "bg-emerald-100 text-emerald-600"
                    }`}
                  >
                    {stage.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">
                  {stage.description}
                </p>
                <p className="text-xs text-gray-500">
                  Duration: {stage.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Health & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Health */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              System Health
            </h2>
            <Activity className="w-5 h-5 text-gray-500" />
          </div>

          <div className="space-y-4">
            {[
              {
                component: "Document Indexer",
                status: "healthy",
                uptime: "99.9%",
              },
              {
                component: "Vector Database",
                status: "healthy",
                uptime: "99.7%",
              },
              {
                component: "Retrieval Engine",
                status: "healthy",
                uptime: "99.8%",
              },
              {
                component: "Generation Model",
                status: "warning",
                uptime: "97.2%",
              },
              { component: "API Gateway", status: "healthy", uptime: "99.9%" },
            ].map((item, index) => (
              <div
                key={item.component}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  {item.status === "healthy" ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  )}
                  <span className="text-sm font-medium text-gray-900">
                    {item.component}
                  </span>
                </div>
                <span className="text-sm text-gray-600">
                  Uptime: {item.uptime}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                name: "Run Query",
                icon: Search,
                color: "from-blue-500 to-blue-600",
              },
              {
                name: "Index Documents",
                icon: FileText,
                color: "from-emerald-500 to-emerald-600",
              },
              {
                name: "View Analytics",
                icon: BarChart3,
                color: "from-purple-500 to-purple-600",
              },
              {
                name: "System Config",
                icon: Layers,
                color: "from-orange-500 to-orange-600",
              },
            ].map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.name}
                  className="flex flex-col items-center space-y-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {action.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-900">
                  Performance Tip
                </span>
              </div>
              <p className="text-sm text-blue-700">
                Focus on improving recall@k scores as they carry 50% weight in
                evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
