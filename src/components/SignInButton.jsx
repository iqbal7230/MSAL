import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";


export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch((e) => {
        console.log(e);
      });
    } 
  };
  return (
    
        <button className="ml-auto" onClick={() => handleLogin("popup")}> Sign in with microsoft </button>
    
  );
};