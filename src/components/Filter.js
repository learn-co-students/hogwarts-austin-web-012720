import React, {Component} from 'react';

class Filter extends Component {
  handleChange = event => {
    this.props.onChange(event.target.value)
  }

  render(){
    return(
      <div className='filterWrapper'>
        <form>
          <label>Select Some Hogs:  </label>
          <select onChange={this.handleChange} className='ui selection dropdown'>
            <option value='all'>All Hogs</option>
            <option value='greased'>Greased Hogs</option>
            <option value='name'>Sort By Name</option>
            <option value='weight'>Sort By Weight</option>
          </select>
        </form>
      </div>
    )
  }  
}

export default Filter;
