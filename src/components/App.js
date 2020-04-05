import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import FilterBar from "./FilterBar";
import PigContainer from "./PigContainer";
import hogs from "../porkers_data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortValue: "All",
      filter: false,
    };
  }

  handleSort = (newSortValue) => {
    this.setState({
      sortValue: newSortValue,
    });
  };

  handleFilter = () => {
    this.setState({
      filter: !this.state.filter,
    });
  };

  sortHogs = () => {
    let { sortValue } = this.state;

    if (sortValue === "Name") {
      return [...hogs].sort((hogA, hogB) => {
        if (hogA.name > hogB.name) {
          return 1;
        } else if (hogA.name < hogB.name) {
          return -1;
        } else {
          return 0;
        }
      });
    } else if (sortValue === "Weight") {
      return [...hogs].sort((hogA, hogB) => {
        if (hogA.weight > hogB.weight) {
          return -1;
        } else if (hogA.weight < hogB.weight) {
          return 1;
        } else {
          return 0;
        }
      });
    } else {
      return [...hogs];
    }
  };

  filterHogs = (finalHogs) => {
    let { filter } = this.state;
    if (filter === true) {
      return finalHogs.filter((hog) => {
        return hog.greased;
      });
    } else {
      return finalHogs;
    }
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <FilterBar
          handleSort={this.handleSort}
          handleFilter={this.handleFilter}
        />
        <PigContainer hogs={this.filterHogs(this.sortHogs())} />
      </div>
    );
  }
}

export default App;
