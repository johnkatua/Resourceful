import React from "react";
import { Link } from "react-router-dom";
// import '../styles/Service.css';
// import image1 from "../assets/Images/dentist.jpeg";
// import image2 from "../assets/Images/hairdresser.jpeg";
// import image3 from "../assets/Images/teaching.jpeg";

const Display = () => {
  return (
    <div className="service__container">
      <div className="service__container--header">
        <h2>Popular Services</h2>
        <Link to="/services">
          <button>Show all..</button>
        </Link>
      </div>
      <div className="service__container--body">
        <div className="service__body1">
          <div className="service__body1--image">
            {/* <img src={image1} alt="image1" className="service__img" /> */}
          </div>
          <div className="service__body1--details">B</div>
        </div>
        <div className="service__body2">
          <div className="service__body1--image">
            {/* <img src={image2} alt="image1" className="service__img" /> */}
          </div>
          <div className="service__body1--details">B</div>
        </div>
        <div className="service__body3">
          <div className="service__body1--image">
            {/* <img src={image3} alt="image1" className="service__img" /> */}
          </div>
          <div className="service__body1--details">B</div>
        </div>
      </div>
    </div>
  );
};

export default Display;
