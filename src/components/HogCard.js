import React, { Component } from "react";

class HogCard extends Component {
  state = {
    details: false
  }

  handleToggle = () => {
    this.setState({details: !this.state.details})
  }
 
  render() {
    const hogName = this.props.hog.name.toLowerCase().split(" ").join("_");
    return (
      <div onClick={this.handleToggle} className="pigTile">
        <img src={`/hog-imgs/${hogName}.jpg`} alt="this.props.name" />
        <h4 className='hoggyText'>{this.props.hog.name}</h4>
        {this.state.details ? 
          (<div className='achievementText'>
          Specialty: {this.props.hog.specialty}<br/>
          Weight: {this.props.hog.weight}<br/>
          Highest Medal Achieved: {this.props.hog['highest medal achieved']}
          </div>) 
        : 
        null}
      </div>
    );
  }
}

export default HogCard;
