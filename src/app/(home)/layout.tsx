import React from "react";
import NavBar from "@/components/shared/navbar";
import Sidebar from "@/components/shared/sidebar";
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full flex-1">
      <Sidebar />
      <div className="flex flex-col h-full flex-1 overflow-y-auto w-full">
        <NavBar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;