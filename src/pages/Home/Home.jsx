import React, { useContext } from "react";
import "./home.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";

export const Home = () => {
  const { dispatch } = useContext(userContext);
  let navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    dispatch({ type: "SINGOUT" });
    navigate("/login");
  };
  return (
    <div>
      <Navbar />
      <h1 className="home-header">Home</h1>
      <span>{location.state}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
