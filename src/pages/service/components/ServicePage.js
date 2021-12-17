import React from "react";
import { Outlet, useNavigate } from "react-router";

import "../Service.css";

const ServicePage = () => {
  const navigate = useNavigate();

  const backToDashboard = (e) => {
    e.preventDefault();
    navigate("/services");
  };
  return (
    <div className="myservice__container">
      <button onClick={backToDashboard} className="myservice__button">
        Back
      </button>
      <div className="myservice__content">
        <Outlet />
      </div>
    </div>
  );
};

export default ServicePage;
