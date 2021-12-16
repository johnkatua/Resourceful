import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import "../../styles/ServiceLayout.css";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="service--layout__container">
      <div className="service--layout__header">
        <Header />
      </div>
      <div className="service--layout__body">
        <Sidebar />
        <div className="service--children">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
