import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import Filter from './Filter';
import HogIndex from './HogIndex';
import hogs from '../porkers_data';

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
    if (selection === 'all') {
      this.setState({ hogsToDisplay: this.state.all });
    } else if (selection === 'greased') {
      this.setState({
        hogsToDisplay: this.state.hogsToDisplay.filter(hog => hog.greased === true)
      });
    } else if (selection === 'name') {
      this.setState({
        hogsToDisplay: this.state.hogsToDisplay.sort((hog1, hog2) =>
          hog1.name > hog2.name ? 1 : -1
        )
      });
    } else if (selection === 'weight') {
      this.setState({
        hogsToDisplay: this.state.hogsToDisplay.sort((hog1, hog2) =>
          hog1.weight > hog2.weight ? 1 : -1
        )
      });
    }
  };

  render() {
    return (
      <div className='App'>
        <Nav />
        <div>
          <Filter findHogs={this.findings} findHogsBySelection={this.findHogsBySelection}/>
        </div>
        <div>
          <HogIndex hogsToDisplay={this.state.hogsToDisplay} />
        </div>
      </div>
    );
  }
}

export default App;
