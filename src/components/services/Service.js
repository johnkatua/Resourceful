import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleService } from "../../redux/action/Services";
import { useParams } from "react-router";

import SingleService from "./SingleService";
import "./Services.css";

const Service = () => {
  const dispatch = useDispatch();
  const { serviceId } = useParams();
  const { service } = useSelector((state) => state.service);
  console.log(service);

  useEffect(() => {
    dispatch(getSingleService(serviceId));
  }, [dispatch, serviceId]);

  return (
    <div>
      {service.map((item) => {
        return (
          <div>
            <SingleService service={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Service;
