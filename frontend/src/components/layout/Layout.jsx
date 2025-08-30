// import React, { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import { useAuth } from '../../contexts/AuthContext';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import Footer from './Footer';
// import LoadingSpinner from '../ui/LoadingSpinner';

// const Layout = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const { loading, isAuthenticated } = useAuth();

//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   if (!isAuthenticated) {
//     return <Outlet />;
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
//       <Navbar />

//       <div className="flex h-[calc(100vh-4rem)]">
//         <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

//         <div className="flex-1 flex flex-col overflow-hidden">
//           <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//           <main className="flex-1 overflow-y-auto p-6">
//             <div className="max-w-7xl mx-auto">
//               <Outlet />
//             </div>
//           </main>

//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "../ui/LoadingSpinner";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { loading, isAuthenticated } = useAuth();

  // Show spinner while loading
  if (loading) return <LoadingSpinner />;

  // Render only the Outlet for unauthenticated users
  if (!isAuthenticated) return <Outlet />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 flex flex-col">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      <div className="flex justify-center flex-1 overflow-hidden h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        {/* <aside> */}
        {/* <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} /> */}
        {/* </aside> */}

        {/* Main content area */}
        <div className=" flex flex-col overflow-hidden">
          {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

          <main className="flex overflow-y-auto p-6">
            <div className=" mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
