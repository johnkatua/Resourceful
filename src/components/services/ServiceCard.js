import React from "react";
import Item from "./Item";

const ServiceCard = ({ service }) => {
  console.log("serviceCard", service)
  return (
    <div className="service--card__container">
      {service.map((item) => {
        return <Item item={item} />;
      })}
    </div>
  );
};

export default ServiceCard;
