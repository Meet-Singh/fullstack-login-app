import { useNavigate } from "react-router";
import { Button } from "@mui/material";

export const LoginButtons = () => {
  const navigate = useNavigate();
  const buttonsConfigs = [
    {
      variant: "contained",
      size: "large",
      onClick: {},
      label: "Submit",
    },
    {
      variant: "contained",
      size: "large",
      onClick: () => navigate("/register"),
      label: "Register",
    },
  ];

  return (
    <div className="w-100 mb-2 mt-5 justify-content-around d-flex">
      {buttonsConfigs.map((config) => (
        <Button
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
