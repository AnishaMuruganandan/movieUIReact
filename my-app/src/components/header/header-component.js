import React, {Component} from 'react';

import './header-component.css';

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faAngleDown, faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faAngleDown, faSearch)

class HeaderComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shouldShow: false,
      navigationDetails: []
    };
    this.displayDropDown = this.displayDropDown.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({navigationDetails: nextProps.movieInfo.movieNavigation});
  }

  displayDropDown() {
    this.setState({shouldShow: true});
  }

  render() {
    return (<div className="header">
      <div className="left topSpace">MOVIEKING</div>
      <div className="headerRight">
        <div className="right menu topSpace">
          <FontAwesomeIcon icon="bars"/>
        </div>
        <nav className="right topSpace">
          {
            (this.items = this.state.navigationDetails.map((item, index) => (<a href="" key={index}>
              {item}
            </a>)))
          }
        </nav>

        <div className="right dropdownHead">
          <div className="dropbtn">
            <FontAwesomeIcon icon="angle-down" onClick={this.displayDropDown}/>
          </div>
          <div className={this.state.shouldShow
              ? 'dropdown-content-show'
              : 'dropdown-content-hide'}>
            {
              (this.items = this.state.navigationDetails.map((item, index) => (<a href="" key={index}>
                {item}
              </a>)))
            }
          </div>
        </div>

        <div className="right searchItems">
          <input className="searchBox" placeholder="Search" id="search"></input>

          <span className="searchIcon">
            <FontAwesomeIcon icon="search"/>
          </span>
        </div>
      </div>
    </div>);
  }
}

export default HeaderComponent;
