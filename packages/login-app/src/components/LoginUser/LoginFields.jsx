import { TextField } from "@mui/material";

export const LoginFields = () => {
  const textFieldConfigs = [
    {
      label: "UserName",
      variant: "standard",
      type: "text",
      required: true,
      className: "",
    },
    {
      label: "Password",
      variant: "standard",
      type: "password",
      required: true,
      className: "mt-3 mb-3",
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
        />
      ))}
    </div>
  );
};
