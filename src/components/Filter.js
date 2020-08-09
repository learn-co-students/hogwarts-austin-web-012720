import React from 'react'

class Filter extends React.Component{

  handleSelectChange = event => {
    this.props.findHogsBySelection(event.target.value)
  }

  handleFindhogs = () => {
    this.props.findHogs()
  }

  render () {
    return (
      <div>
        <div>
          <div className='ui form'>
            <select
            className='ui selection dropdown'
            onChange={this.handleSelectChange}
            >
              <option value='all'>All Hogs</option>
              <option value='greased'>Show Only Greased Hogs</option>
              <option value='name'>Sort Hogs by Name</option>
              <option value='weight'>Sort by Weight</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default Filter