import React, { Component } from "react";
import "./popup-component.css";
class PopUpComponent extends Component {
  constructor(props) {
    super(props);
    this.closePopUp = this.closePopUp.bind(this);
  }
  closePopUp() {
    this.props.callbackFunc();
  }
  render() {
    return (
      <div className="popUpStyle">
        <div class="popup">
          <div className="text">
            <span>MovieName:</span>
            <span>{this.props.name.value}</span>
          </div>
          <div className="text">
            <span>Time:</span>
            <span>{this.props.time.value}</span>
          </div>

          <div className="text">
            <span>Date:</span>
            <span>{this.props.date.toLocaleString("en-US").slice(0, 9)}</span>
          </div>
          <div className="okButton" onClick={this.closePopUp}>
            ok
          </div>
        </div>
      </div>
    );
  }
}

export default PopUpComponent;
