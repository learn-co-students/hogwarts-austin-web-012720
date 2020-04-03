import React, { Component } from "react";
import HogCard from "./HogCard";

class HogTiles extends Component {
  render() {
    console.log(this.props.hogs)
    return (
      <div>
        <div className="ui grid container">
          {this.props.hogs.map((hog, idx) => ( <HogCard key={idx} hog={hog} /> ))}
        </div>
      </div>
    );
  }
}

export default HogTiles;
