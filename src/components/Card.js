import React, {Component} from 'react';
import FrontCard from './FrontCard'
import BackCard from './BackCard'
// import Images from '/src/hog-imgs'

class Card extends Component {
    constructor() {
        super();
        this.state = {
            side: 'front',
        }
    }
    
    flip = () => {
        let newSide;
        if (this.state.side === 'front') {
            newSide = 'back'
        } else {
            newSide = 'front'
        }

        this.setState({side: newSide})
    }
    render() {
        return (
            <div className='pigTile' onClick={this.flip}>
                { this.state.side === 'front' ? 
                    <FrontCard imageSrc={this.props.imageSrc} name={this.props.hog.name}/> : 
                    <BackCard />
                }
            </div>
        )
    }

    onWillUnmount() {
        this.setState({side:'front'})
    }
}

export default Card;