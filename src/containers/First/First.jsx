import React, { Component } from 'react';
import Quote from 'components/Quote/Quote.jsx';


const imgStyle = {
    width: 'auto',
    height: '80vh',
    right: '10vw',
    top: '10vh',
    position: 'absolute',
    zIndex: '0',
    boxShadow: '0px 10px 20px rgba(0,0,0,0.3)'
};


class First extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    

    render() {
        return (
            <div className="First">
                <Quote q="Under 2016 så dog 98 personer av selfie-relaterade olyckor." posX="10" posYBot="20" />
                <img src={require('img/hand.jpg')} alt="Couldn't load" style={imgStyle}></img>
            </div>
        );
    }
}

First.defaultProps = {
    //	Example defaultProps
    //	label: 'click me'
};

First.PropTypes = {
    //	Example PropTypes:
    //	label: PropTypes.string.isRequired,
    //	onClick: PropTypes.func,
};

export default First;
