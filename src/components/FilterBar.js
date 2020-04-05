import React, { Component } from "react";
import Filter from "./Filter";
import Sort from "./Sort";

class FilterBar extends Component {
  render() {
    return (
      <div style={{ padding: "10px", margin: "10px" }}>
        <Sort handleSort={this.props.handleSort} />
        <Filter handleFilter={this.props.handleFilter} />
      </div>
    );
  }
}

export default FilterBar;
