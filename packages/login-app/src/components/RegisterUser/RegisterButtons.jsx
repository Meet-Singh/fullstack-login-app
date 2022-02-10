import { useNavigate } from "react-router";
import { Button } from "@mui/material";

export const RegisterButtons = ({ onHandleSubmit }) => {
  const navigate = useNavigate();

  const buttonsConfigs = [
    {
      variant: "contained",
      size: "large",
      onClick: onHandleSubmit,
      label: "Submit",
    },
    {
      variant: "contained",
      size: "large",
      onClick: () => navigate("/login"),
      label: "Login",
    },
  ];

  return (
    <div className="w-100 mb-4 mt-4 justify-content-around d-flex">
      {buttonsConfigs.map((config) => (
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
