import React, { Component } from "react";

import "./header-component.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faAngleDown,
  faSearch
} from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faAngleDown, faSearch);

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
      navigationDetails: [],
      movieDetails: {},
      inputValue: "",
      filteredMovieDetails: []
    };
    this.displayDropDown = this.displayDropDown.bind(this);
    this.findValue = this.findValue.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      navigationDetails: nextProps.movieInfo.movieNavigation,
      movieDetails: nextProps.movieInfo.moviePicture
    });
  }

  displayDropDown() {
    this.setState({ shouldShow: true });
  }

  findValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  searchItem() {
    var movieDet = this.state.movieDetails;
    const searchValues = movieDet.filter(movie => {
      return movie.name.value === this.state.inputValue;
    });
    this.setState(
      {
        filteredMovieDetails: searchValues
      },
      () => {
        if (this.state.inputValue !== "") {
          console.log("inside callback");
          this.props.callbackFromParent(this.state.filteredMovieDetails);
        } else {
          this.props.callbackFromParent(this.state.movieDetails);
        }
      }
    );

    console.log("searchinput" + this.state.inputValue);
    console.log("hey" + JSON.stringify(searchValues));
  }
  render() {
    return (
      <div>
        <div className="header">
          <div className="left topSpace">MOVIEKING</div>
          <div className="headerRight">
            <div className="right menu topSpace">
              <FontAwesomeIcon icon="bars" />
            </div>
            <nav className="right topSpace">
              {
                (this.items = this.state.navigationDetails.map(
                  (item, index) => (
                    <a href="" key={index}>
                      {item}
                    </a>
                  )
                ))
              }
            </nav>

            <div className="right dropdownHead">
              <div className="dropbtn">
                <FontAwesomeIcon
                  icon="angle-down"
                  onClick={this.displayDropDown}
                />
              </div>
              <div
                className={
                  this.state.shouldShow
                    ? "dropdown-content-show"
                    : "dropdown-content-hide"
                }
              >
                {
                  (this.items = this.state.navigationDetails.map(
                    (item, index) => (
                      <a href="" key={index}>
                        {item}
                      </a>
                    )
                  ))
                }
              </div>
            </div>

            <div className="right searchItems">
              <input
                className="searchBox"
                placeholder="Search"
                id="search"
                onChange={this.findValue}
              />

              <span className="searchIcon">
                <FontAwesomeIcon icon="search" onClick={this.searchItem} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
