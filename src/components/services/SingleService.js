import React from "react";

const SingleService = ({ service }) => {
  return (
    <div className="singleservice__container">
      <div className="singleservice__photo">
        <img src={service.photo} alt="service" className="img" />
      </div>
      <div className="singleservice__content">
        <p className="singleservice__name">{service.name}</p>
        <p>{service.description}</p>
        <div className="singleservice--user__details">
          <p>Consumer Count: {service.consumer_count}</p>
          <p>Delivery Point: {service.delivery_point}</p>
        </div>
        <div className="singleservice--user__details">
          <p>Service Duration: {service.service_duration}</p>
          <p>Service Readiness: {service.service_readiness}</p>
        </div>
        <div className="singleservice--user__details">
          <p>Support Language: {service.support_language}</p>
          <p>Support Team: {service.support_team}</p>
        </div>
        <div className="singleservice--contact__details">
          <p>Price: {service.price}</p>
          <button>Request Service</button>
          <button>Contact Provider</button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
