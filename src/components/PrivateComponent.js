import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router";

const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  // console.log(auth);
  return <>{auth ? <Outlet /> : <Navigate to="/signup" />}</>;
};

export default PrivateComponent;
