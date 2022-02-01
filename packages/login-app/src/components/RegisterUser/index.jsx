import { RegisterButtons } from "./RegisterButtons";
import { RegisterFields } from "./RegisterFields";

import "./style.css";

const RegisterUser = () => {
  return (
    <div className="registerWrapper">
      <h2 className="registerHeader">Register User</h2>
      <p className="registerText mt-4">Kindly fill in details in all fields</p>
      <RegisterFields />
      <RegisterButtons />
    </div>
  );
};

export default RegisterUser;
