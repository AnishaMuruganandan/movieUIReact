import React, { Component } from "react";
import PropTypes from "prop-types";
import "./filter-component.css";
import Select from "react-select";
import "react-select2-wrapper/css/select2.css";
import DatePicker from "react-date-picker";
import PopUpComponent from "../popup/popup-component";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";

const options = [
  {
    value: "Wonder woman",
    label: "Wonder woman"
  },
  {
    value: "Logan",
    label: "Logan"
  },
  {
    value: "dunkirk",
    label: "dunkirk"
  }
];

const options1 = [
  {
    value: "3.30",
    label: "3.30"
  },
  {
    value: "6.30",
    label: "6.30"
  },
  {
    value: "9.30",
    label: "9.30"
  }
];

class FilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOption: "",
      selectName: "",
      selecteddate: "",
      date: new Date(),
      movieContentDetails: [],
      isHidden: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }
  onChange = date => {
    this.setState({ selecteddate: date });
    console.log(`Option selected:`, date);
  };
  componentWillReceiveProps(nextProps) {
    this.setState({
      movieContentDetails: nextProps.movieInfo.moviePicture
    });
  }

  handleChange = selectedOption => {
    this.setState({ selectOption: selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  handleChangeName = selectedOption => {
    this.setState({ selectName: selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    return (
      <div className="filterMovies">
        <div className="name">
          <div className="filterTitle">MOVIE NAME</div>
          <Select onChange={this.handleChangeName} options={options} />
        </div>

        <div className="title">
          <div className="filterTitle">DATE</div>
          <DatePicker
            onChange={this.onChange}
            value={this.state.selecteddate}
            dateFormat="MMMM d, yyyy"
          />
        </div>

        <div className="date">
          <div className="filterTitle">TIME</div>
          <Select onChange={this.handleChange} options={options1} />
        </div>

        <div className="searchButton" onClick={this.toggleHidden}>
          Book
        </div>
        {this.state.isHidden === false ? (
          <PopUpComponent
            time={this.state.selectOption}
            name={this.state.selectName}
            date={this.state.selecteddate}
            callbackFunc={this.toggleHidden}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default FilterComponent;
