import { LoginFields } from "./LoginFields";
import { LoginButtons } from "./LoginButtons";

import "./style.css";

const LoginUser = () => {
  return (
    <div className="loginWrapper">
      <h2 className="loginHeader"> Login Form </h2>
      <p className="loginText mt-4">Please enter you credentials</p>
      <LoginFields />
      <LoginButtons />
    </div>
  );
};

export default LoginUser;
