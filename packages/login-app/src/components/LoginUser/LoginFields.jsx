import { TextField } from "@mui/material";

export const LoginFields = ({ onHandleChange }) => {
  const textFieldConfigs = [
    {
      label: "UserName",
      variant: "standard",
      type: "text",
      required: true,
      className: "",
      key: "username",
    },
    {
      label: "Password",
      variant: "standard",
      type: "password",
      required: true,
      className: "mt-3 mb-3",
      key: "password",
    },
  ];

  return (
    <div className="d-flex flex-column">
      {textFieldConfigs.map((config) => (
        <TextField
          label={config.label}
          variant={config.variant}
          type={config.type}
          required={config.required}
          className={config.className}
          key={config.key}
          onChange={(event) => onHandleChange(config.key, event.target.value)}
        />
      ))}
    </div>
  );
};
