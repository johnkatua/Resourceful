import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import ServiceCard from "./ServiceCard";
import { getServices } from "../../redux/action/Services";
import "./Services.css";

const AllServices = () => {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);
  
  return (
    <div className="all--service__container">
      {services.map((service) => {
        return (
          <div>
            <ServiceCard service={service} />
          </div>
        );
      })}
    </div>
  );
};

export default AllServices;
