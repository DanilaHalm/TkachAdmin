import DashboardToggle from "./dashboardToggle";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col px-4">
      <h1 className="my-10 self-center">Welcome to TkachPro Admin dashboard</h1>
      <DashboardToggle />
    </div>
  );
};

export default Dashboard;
