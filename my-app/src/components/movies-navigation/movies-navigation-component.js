import React, {
  Component
} from 'react';

import './movies-navigation-component.css';

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretSquareRight,faCaretSquareLeft} from '@fortawesome/free-solid-svg-icons'

library.add(faCaretSquareRight,faCaretSquareLeft)

class MovieNavigationComponent extends Component {

  constructor(props) {
    super(props);
    this.scroller = React.createRef();
    this.state = {
      shouldShow: false,
      movieNavigationDetails: []

    };
  this.handleLeftClick = this.handleLeftClick.bind(this);
  this.handleRightClick = this.handleRightClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      movieNavigationDetails: nextProps.movieInfo.moviePicture
    });
  }
handleLeftClick(){
  this.scroller.current.scrollLeft -= 250;
}
handleRightClick(){
  this.scroller.current.scrollLeft += 250;
}
  render() {
    return ( <div className = "movieList" >
      <div className = "movieListHeader" >
      <div className = "movieListTitle" > POPULAR MOVIES < /div>
       <div className = "buttons" >
      <div className = "arrow" id = "rightButton" onClick={this.handleRightClick} >
            <FontAwesomeIcon icon="caret-square-right"/>
      </div>
      <div className = "arrow" id = "leftButton" onClick={this.handleLeftClick} >
            <FontAwesomeIcon icon="caret-square-left"/>

      </div>
      </div>
      </div>
      <div className = "movieListImages"
      id = "movieList" ref={this.scroller}> {
        (this.items = this.state.movieNavigationDetails.map((item, index) => ( < div className = "movieImages"
          key = {
            index
          }
          style = {
            {
              backgroundImage: "url(" + item + ")"
            }
          }> <div className = "rate" > $50 </div></div> )))
      }

      </div>
      </div>
    );
  }
}

export default MovieNavigationComponent;
