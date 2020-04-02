import React from 'react'
import HogCard from './HogCard'

class HogIndex extends React.Component{
  render() {
    return ( 
      <div>
        <div className='ui grid container'>
          {this.props.hogsToDisplay.map((hog, index) => (<HogCard key={index} hog={hog} />))}
        </div>
      </div>
    )
  }
}

export default HogIndex