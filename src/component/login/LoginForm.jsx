import React from "react";
import GoogleLogin from "react-google-login";
import "./Login.css";
import axios from "axios";

const LoginForm = (props) => {
  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  const responseSuccess = (resp) => {
    axios.post(
      "http://localhost:5000/login",
      {
        googleId: resp.googleId,
        name: resp.profileObj.name,
        img: resp.profileObj.imageUrl,
      },
      config
    );
    localStorage.setItem("userInfo", resp.accessToken);
    console.log(resp);
  };
  const responseFail = (resp) => {
    // console.log(resp);
  };
  //TODO fix this login page
  return (
    <GoogleLogin
      clientId="398755490316-21li3gpmsl76i8kjln8gsvolhp57qi06.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseSuccess}
      onFailure={responseFail}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginForm;
