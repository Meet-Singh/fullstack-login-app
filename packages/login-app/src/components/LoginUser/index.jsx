import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Alert, AlertTitle } from "@mui/material";

import { LoginFields } from "./LoginFields";
import { LoginButtons } from "./LoginButtons";
import UserService from "../../services/userServices";

import "./style.css";

const LoginUser = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [responseData, setResponseData] = useState({
    isData: false,
    isError: false,
    message: "",
  });

  useEffect(() => {
    if (responseData.isData || responseData.isError) {
      setTimeout(
        () =>
          setResponseData({
            isData: false,
            isError: false,
            message: "",
          }),
        5000
      );
    }
  }, [responseData]);

  const onHandleChange = (key, value) => {
    setUserDetails({ ...userDetails, [key]: value });
  };

  const onHandleSubmit = async () => {
    try {
      const response = await UserService.login(
        userDetails.username,
        userDetails.password
      );
      const responseMessage = response?.data?.message;
      setResponseData({
        isData: true,
        isError: false,
        message: responseMessage,
      });

      localStorage.setItem("userDetails", userDetails);
      setTimeout(navigate("/dashboard"), 3000);
    } catch (error) {
      const errorMessage = error.response.data.message;
      setResponseData({
        isData: false,
        isError: true,
        message: errorMessage,
      });
    }
  };

  const showAlertPopUp = responseData.isData || responseData.isError;

  return (
    <div className="loginWrapper">
      <h2 className="loginHeader"> Login Form </h2>
      <p className="loginText mt-4">Please enter you credentials</p>
      <LoginFields onHandleChange={onHandleChange} />
      <LoginButtons onHandleSubmit={onHandleSubmit} />
      {!showAlertPopUp && <p className="whiteSpaceWrapper">{""}</p>}
      {showAlertPopUp && (
        <Alert
          severity={responseData.isData ? "success" : "error"}
          className="text-left mt-4"
        >
          <AlertTitle>{responseData.isData ? "Success" : "Error"}</AlertTitle>
          {responseData.message}
        </Alert>
      )}
    </div>
  );
};

export default LoginUser;
