import React, { Component } from "react";
// import Carousel from 'react-bootstrap/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./slider-component.css";
class SliderComponent extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={require("./slider1.jpg")} />
        </div>
        <div>
          <img src={require("./slider2.jpg")} />
        </div>
        <div>
          <img src={require("./slider3.jpg")} />
        </div>
      </Carousel>
    );
  }
}

export default SliderComponent;
