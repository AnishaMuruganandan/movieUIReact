import React, {Component} from 'react';

import './page-component.css';
import HeaderComponent from "../components/header/header-component";
import SliderComponent from "../components/slider/slider-component";
import MovieNavigationComponent from "../components/movies-navigation/movies-navigation-component";
import FilterComponent from "../components/filter/filter-component";

class PageComponent extends Component {

  constructor() {
    super();
    this.state = {
      movie: {}
    };
  }

  componentWillMount() {
    fetch("https://api.myjson.com/bins/1ew88e").then(function(response) {
      return response.json();
    }).then(json => {
      console.log("parent" + json);
      this.setState({movie: json.movieDetails});
    }).catch(function(ex) {
      console.log("parsing failed", ex);
    });
  }

  render() {
    return (<div>
      <HeaderComponent movieInfo={this.state.movie}/>
      <SliderComponent/>
      <FilterComponent/>
      <MovieNavigationComponent movieInfo={this.state.movie}/>

    </div>);
  }
}

export default PageComponent;
