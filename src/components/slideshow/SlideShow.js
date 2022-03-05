import React from 'react'
import { Carousel } from 'react-bootstrap';
import image1 from "../../assets/Images/ali.jpeg";
import image2  from "../../assets/Images/photography.jpg";

const SlideShow = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const styles = {
    width: "100%",
    height: "100%",
  }

  const images = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center"
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carousel-fit' style={styles} >
      <Carousel.Item style={images}>
        <img src={image1} alt="First slide" className="d-block w-100" style={images} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image1} alt="First slide" className="d-block w-100" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={images}>
        <img src={image2} alt="First slide" className="d-block w-100 h-100"   />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;