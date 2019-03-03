import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './filter-component.css';
import Select from 'react-select';
import 'react-select2-wrapper/css/select2.css';

const options = [
  {
    value: 'chocolate',
    label: 'Chocolate'
  }, {
    value: 'strawberry',
    label: 'Strawberry'
  }, {
    value: 'vanilla',
    label: 'Vanilla'
  }
];

class FilterComponent extends Component {
  state = {
    selectedOption: null
  }

  componentDidMount() {
    $('.js-example-basic-single').select2();
  }
  handleChange = (selectedOption) => {
    this.setState({selectedOption});
    console.log(`Option selected:`, selectedOption);
  }
  render() {
    const {selectedOption} = this.state;
    return (<div className="filter">
      <div className="genre">
        <div className="filterTitle">GENRE</div>

      </div>

      <div className="rating">
        <div className="filterTitle">RATINGS</div>
        <Select value={selectedOption} onChange={this.handleChange} options={options}/>
      </div>
      <div>
        <div className="filterTitle">ORDER BY</div>
        <select className="js-example-basic-single" name="state">
          <option value="YEAR">YEAR</option>
          <option value="MONTH">MONTH</option>
        </select>
      </div>

      <div className="searchButton">
        SEARCH
      </div>
    </div>);
  }
}

export default FilterComponent;
