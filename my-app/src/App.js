import React, {Component} from 'react';

import './App.css';
import PageComponent from "./pages/page-component";

class App extends Component {
  render() {
    return (
      <div className = "App" >
      <PageComponent / >
      </div>
    );
  }
}

export default App;
