import React from 'react'

class HogCard extends React.Component{

  constructor(){
    super()
    this.state = {
      details: false
    }
  
  }
  
  toggleDetails = () => {
    this.setState({
      details: !this.state.details
    })
  }

  render() {
    const hogName = this.props.hog.name.toLowerCase().split(' ').join('_')
    const hogDetails =  <div>Specialty: {this.props.hog.specialty}<br />
                            Weight: {this.props.hog.weight}<br />
                            Highest Medal Achieved: {this.props.hog['highest medal achieved']}
                        </div>

    return (
      <div onClick={this.toggleDetails}>
        <img 
          src={require(`../hog-imgs/${hogName}.jpg`)}
          alt={this.props.hog.name}
          />
          <h4>{this.props.hog.name}</h4>
          {this.state.details ? hogDetails : ''}
      </div>
    )
  }
}

export default HogCard