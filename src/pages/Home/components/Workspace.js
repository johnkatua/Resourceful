import React from "react";
// import image1 from '../assets/Images/hairdresser.jpeg';
// import image2 from '../assets/Images/packaging.jpeg';
// import image3 from '../assets/Images/teaching.jpeg';
// import image4 from '../assets/Images/photography.jpg';
// import image5 from '../assets/Images/laundry.jpeg';
// import image6 from '../assets/Images/dentist.jpeg';

const Workspace = () => {
  return (
    <div className="workspace__container">
      <h2>Our world</h2>
      <div className="workspace__container--content">
        <div className="workspace__image1">{/* <img src={image1} alt="image1" className="workspace__img" /> */}</div>
        <div className="workspace__image2">{/* <img src={image2} alt="image1" className="workspace__img" /> */}</div>
        <div className="workspace__image3">{/* <img src={image3} alt="image1" className="workspace__img" /> */}</div>
        <div className="workspace__image4">{/* <img src={image4} alt="image1" className="workspace__img" /> */}</div>
        <div className="workspace__image5">{/* <img src={image5} alt="image1" className="workspace__img" /> */}</div>
        <div className="workspace__image6">{/* <img src={image6} alt="image1" className="workspace__img" /> */}</div>
      </div>
    </div>
  );
};

export default Workspace;
