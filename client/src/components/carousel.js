import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../images/15632030145d2c95c60c77a9.31986308.jpg';
import img2 from '../images/download.jpg';
import img3 from '../images/mountains-1412683__340.png';

const carousel = () =>{
   
  return (
      <div>
<Carousel >
  <Carousel.Item>
    <img
      className="d-block"
       src={img1} height="300px" width="10000px" alt="img1"
      alt="First slide"
    />
    <Carousel.Caption style={{ color: "#666666" }}>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{ color: "#666666" }}>
    <img
      className="d-block"
      src={img2} height="300px" width="10000px" alt="img2"
      alt="Third slide"
    />

    <Carousel.Caption style={{ color: "#666666" }}>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src={img3}  height="300px" width="10000px" alt="img3"
      alt="Third slide"
    />

    <Carousel.Caption style={{ color: "#666666" }}> 
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
    
        );
    
}

export default carousel;