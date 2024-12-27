import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// add a navbar component

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
