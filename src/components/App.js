import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Card from "./Card"

import HelloWorld from "./HelloWorld";

class App extends Component {

  getImageByName(name) {
    const slug = name.toLowerCase().replace(/ /g,"_");
    // 'src/hog-imgs/augustus_gloop.jpg'
    console.log("/src/hog-imgs/"+slug+".jpg")
    return "/src/hog-imgs/"+slug+".jpg"
  }
  render() {
    return (
      <div className="App">
        <Nav />
        {hogs.map((hog, idx) => <Card key={idx} imageSrc={this.getImageByName(hog.name)} hog={hog}/>)}
      </div>
    );
  }
}

export default App;
