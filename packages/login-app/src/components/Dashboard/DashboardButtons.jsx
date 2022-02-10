import { Button } from "@mui/material";
import { useNavigate } from "react-router";

const DashboardButtons = () => {
  const navigate = useNavigate();
  const onHandleLogout = () => {
    navigate("/login");
    localStorage.removeItem("userDetails");
  };

  return (
    <div className="w-100 mb-4 mt-4 justify-content-around d-flex">
      <Button
        key="logout"
        variant="contained"
        size="large"
        onClick={onHandleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default DashboardButtons;
