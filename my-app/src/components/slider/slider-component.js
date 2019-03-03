import React, {Component} from 'react';
// import Carousel from 'react-bootstrap/Carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import "./slider-component.css";
class SliderComponent extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {index, direction} = this.state;

    var slider1 = require('./slider1.jpg');
    var slider2 = require('./slider2.jpg');
    var slider3 = require('./slider3.jpg');

    return (<Carousel>
      <div>
        <img src={require('./slider1.jpg')}/>

      </div>
      <div>
        <img src={require('./slider2.jpg')}/>
      </div>
      <div>
        <img src={require('./slider3.jpg')}/>
      </div>
    </Carousel>);
  }
}

// <div>
//      <img className="d-block w-100 slider" key={index} style={{
//   backgroundImage: "url(" + slider2 + ")"
// }}/>
// </div>
// <div>
//     <img src={require('./slider3.jpg')} />
//     <p className="legend">Legend 3</p>
// </div>

export default SliderComponent;
