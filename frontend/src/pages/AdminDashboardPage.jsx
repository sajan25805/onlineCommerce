import React from "react";
import AdminHeader from "../components/Layout/AdminHeader"; // Importing the AdminHeader component
import AdminSideBar from "../components/Admin/Layout/AdminSideBar"; // Importing the AdminSideBar component
import AdminDashboardMain from "../components/Admin/AdminDashboardMain"; // Importing the AdminDashboardMain component

// Defining the AdminDashboardPage component
const AdminDashboardPage = () => {
  return (
    <div>
      {/* Rendering the AdminHeader component */}
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          {/* Rendering the AdminSideBar component */}
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSideBar active={1} />
          </div>
          {/* Rendering the AdminDashboardMain component */}
          <AdminDashboardMain />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage; // Exporting the AdminDashboardPage component
