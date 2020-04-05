import React, { Component } from "react";

class Sort extends Component {
  handleChange = (event) => {
    this.props.handleSort(event.target.value);
  };

  render() {
    return (
      <span style={{ padding: "10px", margin: "10px" }}>
        <select onChange={this.handleChange}>
          <option value="All"> All</option>
          <option value="Weight">Weight</option>
          <option value="Name">Name</option>
        </select>
      </span>
    );
  }
}

export default Sort;
