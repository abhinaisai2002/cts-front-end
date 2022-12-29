import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "../components/loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { showLoading } = useSelector(state => state.loading);
  
  console.log(user, isAuthenticated, showLoading);
  
  if (showLoading)
      return <Loading />

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default PrivateRoute;