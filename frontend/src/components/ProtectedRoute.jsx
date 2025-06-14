import React from "react";
import { Navigate } from "react-router-dom";
import { isTokenExpired } from "../utils/token";
import { toaster } from "./ui/toaster";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token || isTokenExpired(token)) {
    localStorage.removeItem("token");
    toaster.create({
      title: "Session Expired! Silahkan login terlebih dahulu!",
      type: "warning",
    });
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
