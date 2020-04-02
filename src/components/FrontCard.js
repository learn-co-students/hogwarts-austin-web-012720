import React, { Component } from "react";
import logo from '../hog-imgs/augustus_gloop.jpg';

class FrontCard extends Component{
    render() {
        return <div>
            <h1>{this.props.name}</h1>
            <img src={logo} alt='logo'/>
        </div>
    }
}

export default FrontCard;