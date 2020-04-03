import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTiles from "./HogTiles";
import Filter from "./Filter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      all: hogs,
      hogsToDisplay: hogs
    };
  }

  findHogs = () => {
    //clear Dom at first, then Display what ever the selection of hogs is
    this.state.hogsToDisplay;
  };

  findHogsBySelection = selection => {
    if (selection === "all") {
      this.setState({ hogsToDisplay: this.state.all });
    } else if (selection === "greased") {
      this.setState({
        hogsToDisplay: this.state.hogsToDisplay.filter(
          hog => hog.greased === true
        )
      });
    } else if (selection === "name") {
      this.setState({
        hogsToDisplay: this.state.hogsToDisplay.sort((hog1, hog2) =>
          hog1.name > hog2.name ? 1 : -1
        )
      });
    } else if (selection === "weight") {
      this.setState({
        hogsToDisplay: this.state.hogsToDisplay.sort((hog1, hog2) =>
          hog1.weight > hog2.weight ? 1 : -1
        )
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <div>
          <Filter
            findHogs={this.findHogs}
            findHogsBySelection={this.findHogsBySelection}
          />
        </div>
        <div>
          {/* <HogTiles hogsToDisplay={this.state.hogsToDisplay} /> */}
          <HogTiles hogs={hogs} />
        </div>
      </div>
    );
  }
}

export default App;
