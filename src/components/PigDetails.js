import React, { Component } from "react";

class PigDetails extends Component {
  render() {
    return (
      <div>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Greased: {this.props.hog.greased ? "Yes" : "No"}</p>
        <p>Weight: {this.props.hog.weight}</p>
      </div>
    );
  }
}

export default PigDetails;
