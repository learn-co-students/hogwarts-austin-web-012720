import React, { Component } from "react";

class Filter extends Component {
  handleChange = (event) => {
    this.props.handleFilter();
  };
  render() {
    return (
      <span>
        <label>
          <input type="checkbox" onChange={this.handleChange} />
          <span>Greased?</span>
        </label>
      </span>
    );
  }
}

export default Filter;
