import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item }) => {
  const navigate = useNavigate();

  const viewItem = (e) => {
    e.preventDefault();
    navigate(`/service/${item.id}`);
  };

  return (
    <div className="item--container">
      <div className="item--card__photo">
        <img src={item.photo} alt="service" className="img" />
      </div>
      <div className="item--card__content">
        <div className="item--card__view">
          <p className="item--card__name">{item.name}</p>
          <button onClick={viewItem}>View Service</button>
        </div>
        <p className="item--card__description">{item.description}</p>
        <div className="item--consumer__details">
          <p>Consumer count: {item.consumer_count}</p>
          <p>Delivery Point: {item.delivery_point}</p>
        </div>
        <div className="item--service__details">
          <p>Service duration: {item.service_duration}</p>
          <p>Service readiness: {item.service_readiness}</p>
        </div>
        <div className="item--support__details">
          <p>Support language: {item.support_language}</p>
          <p>Support team: {item.support_team}</p>
        </div>
        <div className="item--contact__details">
          <p>Price: {item.price}</p>
          <button>Request Service</button>
          <button>Contact Provider</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
