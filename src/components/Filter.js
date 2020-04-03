import React, { Component } from "react";

class Filter extends Component {
  handleSelectChange = event => {
    this.props.findHogsBySelection(event.target.value);
  };

  handleFindHogs = () => {
    this.props.findHogs();
  };

  render() {
    return (
      <div>
        <div>
          <div className="ui form">
            <select
              className="ui selection dropdown"
              onChange={this.handleSelectChange}
            >
              <option value="all">All Hogs</option>
              <option value="greased">Show Only Greased Hogs</option>
              <option value="name">Sort Hogs By Name</option>
              <option value="weight">Sort By Weight</option>
            </select>
          </div>
        </div>
        {/* <div className="field">
          <button className="ui button" onClick={this.handleFindHogs} >
            Find Your Hogs To Display
          </button>
        </div> */}
      </div>
    );
  }
}

export default Filter;
