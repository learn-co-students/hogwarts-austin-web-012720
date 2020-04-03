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
    const hogDetails = (<div>
        <h6>{this.props.hog.specialty}</h6> 
        <h6>{this.props.hog.weight}</h6>
    <h6>{this.props.hog['highest medal achieved']}</h6>
    </div>)

    console.log(this.props.hog)
    return (
      <div onClick={this.toggleDetails}>
        <img 
          src={`./hog-imgs/${hogName}.jpg`}
          alt={this.props.hog.name}
          />
          <h4>{this.props.hog.name}</h4>
          {this.state.details ? hogDetails : ''}
      </div>
    )
  }
}
export default HogCard