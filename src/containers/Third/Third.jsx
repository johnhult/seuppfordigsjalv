import React, { Component } from 'react';
import Quote from 'components/Quote/Quote.jsx';


const imgStyle = {
    width: 'auto',
    height: '80vh',
    left: '10vw',
    bottom: '10vh',
    position: 'absolute',
    zIndex: '0',
    boxShadow: '0px 10px 20px rgba(0,0,0,0.6)'
};


class Third extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    

    render() {
        return (
            <div className="Third">
                <Quote q="Mer än hälften av alla svenskar lider av övervikt eller fetma." posXRight="2" posYBot="10" />
                <img src={require('img/scream.jpg')} alt="Couldn't load" style={imgStyle}></img>
            </div>
        );
    }
}

Third.defaultProps = {
    //	Example defaultProps
    //	label: 'click me'
};

Third.PropTypes = {
    //	Example PropTypes:
    //	label: PropTypes.string.isRequired,
    //	onClick: PropTypes.func,
};

export default Third;
