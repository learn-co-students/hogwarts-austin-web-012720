import React, { Component } from "react";
import PigTile from "./PigTile";

class PigContainer extends Component {
  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map((hog) => {
          return <PigTile key={hog.name} hog={hog} />;
        })}
      </div>
    );
  }
}

export default PigContainer;
