import { useEffect } from "react";
import { useNavigate } from "react-router";
import DashboardButtons from "./DashboardButtons";

import "./style.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const userDetails = localStorage.getItem("userDetails");

  useEffect(() => {
    if (!userDetails) {
      navigate("/login");
    }
  }, [navigate, userDetails]);

  return (
    <div className="dashboardWrapper">
      <h2 className="dashboardHeader"> User Dashboard </h2>
      <p className="dashboardText mt-4">You are successfully logged in</p>
      <DashboardButtons />
    </div>
  );
};

export default Dashboard;
