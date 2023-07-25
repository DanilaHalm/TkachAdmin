"use client";
import { ParseContext } from "@/servises/context";
import DashboardToggle from "./dashboardToggle";
// import Parse from "parse/dist/parse.min.js";
import Parse from "@/servises/parse";

// Parse.initialize(process.env.NEXT_PUBLIC_APP_ID, process.env.NEXT_PUBLIC_JS_KEY);
// Parse.serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

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
