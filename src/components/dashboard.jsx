"use client";
import { ParseContext } from "@/servises/context";
import DashboardToggle from "./dashboardToggle";
import Parse from "@/servises/parse";

const Dashboard = () => {
  return (
    <ParseContext.Provider value={Parse}>
      <div className="min-h-screen flex flex-col px-4">
        <h1 className="my-10 self-center">Welcome to TkachPro Admin dashboard</h1>
        <DashboardToggle />
      </div>
    </ParseContext.Provider>
  );
};

export default Dashboard;
