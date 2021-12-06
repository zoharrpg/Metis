import React from "react";

import LoginForm from "./LoginForm";
import "./Login.css";
import GoogleLogin from "react-google-login";

const Login = (props) => {
    const responseSuccess = (resp)=>{
        console.log(resp);
    }
    const responseFail = (resp)=>{
        console.log(resp);
    }
  //TODO fix this login page
  return (
    <div className="vertical">
      {/* <LoginForm /> */}
      <GoogleLogin
        clientId="398755490316-21li3gpmsl76i8kjln8gsvolhp57qi06.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseSuccess}
        onFailure={responseFail}
        cookiePolicy={'single_host_origin'}
      >
        
      </GoogleLogin>
    </div>
  );
};

export default Login;
