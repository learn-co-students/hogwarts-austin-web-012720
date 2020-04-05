import React, { Component } from "react";
import PigDetails from "./PigDetails";

class PigTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };

  render() {
    let { name: pigName } = this.props.hog;
    let slug = pigName.replace(/ /g, "_").toLowerCase();

    return (
      <div
        className="ui eight wide column"
        style={{ padding: "10px" }}
        onClick={this.handleClick}
      >
        <h2>{pigName}</h2>
        <img src={`../hog-imgs/${slug}.jpg`} alt="hog" />
        {this.state.isClicked ? <PigDetails hog={this.props.hog} /> : null}
      </div>
    );
  }
}

export default PigTile;
