import React from "react";


const Info = ({ name, icon }) => {
  return (
    <div className="info__container">
      <span>{icon}</span>
      <p>{name}</p>
    </div>
  );
};

export default Info;
