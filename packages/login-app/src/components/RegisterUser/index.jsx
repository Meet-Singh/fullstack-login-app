import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Alert, AlertTitle } from "@mui/material";

import { RegisterButtons } from "./RegisterButtons";
import { RegisterFields } from "./RegisterFields";

import "./style.css";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    retryPassword: "",
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
      const response = await axios.post("/users/register", userDetails);
      const responseMessage = response?.data?.message;
      setResponseData({
        isData: true,
        isError: false,
        message: responseMessage,
      });
      setTimeout(navigate("/login"), 3000);
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
    <div className="registerWrapper">
      <h2 className="registerHeader">Register User</h2>
      <p className="registerText mt-4">Kindly fill in details in all fields</p>
      <RegisterFields onHandleChange={onHandleChange} />
      <RegisterButtons onHandleSubmit={onHandleSubmit} />
      {!showAlertPopUp && <p className="whiteSpaceWrapper">{""}</p>}
      {showAlertPopUp && (
        <Alert
          severity={responseData.isData ? "success" : "error"}
          className="text-left"
        >
          <AlertTitle>{responseData.isData ? "Success" : "Error"}</AlertTitle>
          {responseData.message}
        </Alert>
      )}
    </div>
  );
};

export default RegisterUser;
