import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export const WelcomeButtons = () => {
  const navigate = useNavigate();
  const buttonConfigs = [
    {
      variant: "contained",
      size: "large",
      onClick: () => navigate("/login"),
      label: "Login",
    },
    {
      variant: "contained",
      size: "large",
      onClick: () => navigate("/register"),
      label: "Register",
    },
  ];

  return (
    <div className="w-100 mb-3 mt-5 justify-content-around d-flex">
      {buttonConfigs.map((config) => (
        <Button
          key={config.label}
          variant={config.variant}
          size={config.size}
          onClick={config.onClick}
        >
          {config.label}
        </Button>
      ))}
    </div>
  );
};
