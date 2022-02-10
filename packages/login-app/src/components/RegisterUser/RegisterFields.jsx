import { TextField } from "@mui/material";

export const RegisterFields = ({ onHandleChange }) => {
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
      label: "Email-Id",
      variant: "standard",
      type: "text",
      className: "mt-3",
      key: "email",
    },
    {
      label: "Password",
      variant: "standard",
      type: "password",
      required: true,
      className: "mt-3",
      key: "password",
    },
    {
      label: "Re-Enter Password",
      variant: "standard",
      type: "password",
      required: true,
      className: "mt-3 mb-3",
      key: "retryPassword",
    },
  ];

  return (
    <div className="d-flex flex-column">
      {textFieldConfigs.map((config) => (
        <TextField
          key={config.key}
          label={config.label}
          variant={config.variant}
          type={config.type}
          required={config.required}
          className={config.className}
          onChange={(event) => onHandleChange(config.key, event.target.value)}
        />
      ))}
    </div>
  );
};
