import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTiles from "./HogTiles";

class App extends Component {
  state = {
    hogsToDisplay: hogs,
  };

  onChange = (selection) => {
    if (selection === "all") {
      this.setState({ hogsToDisplay: hogs });
    } else if (selection === "greased") {
      const greased = hogs.filter((hog) => hog.greased);
      this.setState({ hogsToDisplay: greased });
    } else if (selection === "name") {
      const nameSort = hogs.sort((hog1, hog2) => hog1.name > hog2.name ? 1 : -1);
      this.setState({ hogsToDisplay: nameSort });
    } else if (selection === "weight") {
      const weightSort = hogs.sort((hog1, hog2) => hog1.weight > hog2.weight ? 1 : -1);
      this.setState({ hogsToDisplay: weightSort });
    }
  };

  render() {
    return (
      <div className="App">
        <Nav onChange={this.onChange} />
        <HogTiles hogs={this.state.hogsToDisplay} />
      </div>
    );
  }
}

export default App;
