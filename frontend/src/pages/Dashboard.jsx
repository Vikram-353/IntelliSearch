// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Users,
//   TrendingUp,
//   Activity,
//   DollarSign,
//   Calendar,
//   Clock,
//   BarChart3,
//   PieChart,
//   Mail,
//   Settings,
// } from "lucide-react";
// import { useAuth } from "../contexts/AuthContext";

// const Dashboard = () => {
//   const { user } = useAuth();

//   const stats = [
//     {
//       title: "Total Users",
//       value: "2,543",
//       change: "+12%",
//       changeType: "positive",
//       icon: Users,
//       color: "from-blue-500 to-blue-600",
//     },
//     {
//       title: "Revenue",
//       value: "$45,231",
//       change: "+8%",
//       changeType: "positive",
//       icon: DollarSign,
//       color: "from-emerald-500 to-emerald-600",
//     },
//     {
//       title: "Active Sessions",
//       value: "1,234",
//       change: "-2%",
//       changeType: "negative",
//       icon: Activity,
//       color: "from-purple-500 to-purple-600",
//     },
//     {
//       title: "Growth Rate",
//       value: "23.5%",
//       change: "+5%",
//       changeType: "positive",
//       icon: TrendingUp,
//       color: "from-orange-500 to-orange-600",
//     },
//   ];

//   const recentActivity = [
//     {
//       id: 1,
//       action: "User John Doe registered",
//       time: "2 minutes ago",
//       type: "user",
//     },
//     {
//       id: 2,
//       action: "Payment of $299 received",
//       time: "5 minutes ago",
//       type: "payment",
//     },
//     {
//       id: 3,
//       action: "New order #1234 created",
//       time: "10 minutes ago",
//       type: "order",
//     },
//     {
//       id: 4,
//       action: "User Jane Smith updated profile",
//       time: "15 minutes ago",
//       type: "user",
//     },
//     {
//       id: 5,
//       action: "System backup completed",
//       time: "1 hour ago",
//       type: "system",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 },
//     },
//   };

//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="space-y-6"
//     >
//       {/* Welcome Header */}
//       <motion.div
//         variants={itemVariants}
//         className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 p-6"
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900 mb-2">
//               Welcome back, {user?.firstName}! 👋
//             </h1>
//             <p className="text-gray-600">
//               Here's what's happening with your account today.
//             </p>
//           </div>
//           <div className="hidden md:flex items-center space-x-2 text-gray-500">
//             <Calendar className="w-5 h-5" />
//             <span className="text-sm">
//               {new Date().toLocaleDateString("en-US", {
//                 weekday: "long",
//                 year: "numeric",
//                 month: "long",
//                 day: "numeric",
//               })}
//             </span>
//           </div>
//         </div>
//       </motion.div>

//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {stats.map((stat, index) => {
//           const Icon = stat.icon;
//           return (
//             <motion.div
//               key={stat.title}
//               variants={itemVariants}
//               whileHover={{ scale: 1.02, y: -5 }}
//               className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-6 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div
//                   className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}
//                 >
//                   <Icon className="w-6 h-6 text-white" />
//                 </div>
//                 <span
//                   className={`text-sm font-medium px-2 py-1 rounded-full ${
//                     stat.changeType === "positive"
//                       ? "text-emerald-600 bg-emerald-50"
//                       : "text-red-600 bg-red-50"
//                   }`}
//                 >
//                   {stat.change}
//                 </span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-1">
//                 {stat.value}
//               </h3>
//               <p className="text-gray-600 text-sm">{stat.title}</p>
//             </motion.div>
//           );
//         })}
//       </div>

//       {/* Main Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Analytics Chart */}
//         <motion.div
//           variants={itemVariants}
//           className="lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-6"
//         >
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-semibold text-gray-900">
//               Analytics Overview
//             </h2>
//             <div className="flex items-center space-x-2">
//               <BarChart3 className="w-5 h-5 text-gray-500" />
//               <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                 <option>Last 7 days</option>
//                 <option>Last 30 days</option>
//                 <option>Last 90 days</option>
//               </select>
//             </div>
//           </div>

//           {/* Placeholder Chart */}
//           <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
//             <div className="text-center">
//               <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-3" />
//               <p className="text-gray-500">Chart visualization would go here</p>
//               <p className="text-sm text-gray-400">
//                 Connect your analytics data
//               </p>
//             </div>
//           </div>
//         </motion.div>

//         {/* Recent Activity */}
//         <motion.div
//           variants={itemVariants}
//           className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-6"
//         >
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-xl font-semibold text-gray-900">
//               Recent Activity
//             </h2>
//             <Clock className="w-5 h-5 text-gray-500" />
//           </div>

//           <div className="space-y-4">
//             {recentActivity.map((activity) => (
//               <motion.div
//                 key={activity.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.1 * activity.id }}
//                 className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
//               >
//                 <div
//                   className={`w-2 h-2 rounded-full mt-2 ${
//                     activity.type === "user"
//                       ? "bg-blue-500"
//                       : activity.type === "payment"
//                       ? "bg-emerald-500"
//                       : activity.type === "order"
//                       ? "bg-purple-500"
//                       : "bg-gray-500"
//                   }`}
//                 />
//                 <div className="flex-1">
//                   <p className="text-sm text-gray-900">{activity.action}</p>
//                   <p className="text-xs text-gray-500">{activity.time}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <div className="mt-4 pt-4 border-t border-gray-200">
//             <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200">
//               View all activity →
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Quick Actions */}
//       <motion.div
//         variants={itemVariants}
//         className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-6"
//       >
//         <h2 className="text-xl font-semibold text-gray-900 mb-6">
//           Quick Actions
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {[
//             {
//               name: "Create User",
//               icon: Users,
//               color: "from-blue-500 to-blue-600",
//             },
//             {
//               name: "Generate Report",
//               icon: BarChart3,
//               color: "from-emerald-500 to-emerald-600",
//             },
//             {
//               name: "Send Message",
//               icon: Mail,
//               color: "from-purple-500 to-purple-600",
//             },
//             {
//               name: "Update Settings",
//               icon: Settings,
//               color: "from-orange-500 to-orange-600",
//             },
//           ].map((action, index) => {
//             const Icon = action.icon;
//             return (
//               <motion.button
//                 key={action.name}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="flex flex-col items-center space-y-3 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200"
//               >
//                 <div
//                   className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center`}
//                 >
//                   <Icon className="w-6 h-6 text-white" />
//                 </div>
//                 <span className="text-sm font-medium text-gray-900">
//                   {action.name}
//                 </span>
//               </motion.button>
//             );
//           })}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Dashboard;

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
              <Brain className="w-8 h-8 text-blue-600" />
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
