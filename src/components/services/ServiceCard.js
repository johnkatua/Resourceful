import React from "react";
import { useDispatch } from "react-redux";

import Item from "./Item";
import { deleteServiceRequest } from "../../redux/action/DeleteService";

const ServiceCard = ({ service }) => {
  const dispatch = useDispatch();
  console.log("serviceCard", service)                                                                                                                                                                                                                                                                                                                                                                           
  return (
    <div className="service--card__container">
      {service.map((item) => {
        return <Item item={item} deleteItem={() => dispatch(deleteServiceRequest(item.id))} />;
      })}
    </div>
  );
};

export default ServiceCard;
