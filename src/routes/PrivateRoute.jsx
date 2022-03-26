import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../context/userContext";
export const PrivateRoute = ({ children }) => {
  const { isLogin } = useContext(userContext);
  
  return isLogin.isLogin !== false ? children : <Navigate to="/login" />;
};
