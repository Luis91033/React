/** @format */

import React, { useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;
  return !isAuthenticated && !loading ? <Navigate to="/login" /> : children;
};

export default PrivateRoute;
