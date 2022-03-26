import React, { useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { userContext } from "../../context/userContext";

export const Login = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(userContext);
  const handleLogin = () => {
    dispatch({ type: "LOGIN" });
    goToHome();
  };
  const goToHome = () => {
    navigate("/users");
  };
  return (
    <div className="loginContainer">
      <Navbar />
      <h1>Login</h1>
      <div className="inputContainer">
        <label htmlFor="">Email</label>
        <input type="text" name="" id="" placeholder="Carlos @email" />
      </div>
      <div className="inputContainer">
        <label htmlFor="">Password</label>
        <input type="passowrd" name="" id="" placeholder="*****" />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
