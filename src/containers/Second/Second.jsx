import React, { Component } from 'react';
import Quote from 'components/Quote/Quote.jsx';


const imgStyle = {
    width: 'auto',
    height: '80vh',
    left: '2vw',
    top: '10vh',
    position: 'absolute',
    zIndex: '0',
    boxShadow: '0px 10px 20px rgba(0,0,0,0.6)'
};


class Second extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    

    render() {
        return (
            <div className="Second">
                <Quote q="Akta så du inte biter dig själv i kinden. Den starkaste muskeln i den mänskliga kroppen är käkmuskeln." posX="30" posY="12" />
                <img src={require('img/kid.jpg')} alt="Couldn't load" style={imgStyle}></img>
            </div>
        );
    }
}

Second.defaultProps = {
    //	Example defaultProps
    //	label: 'click me'
};

Second.PropTypes = {
    //	Example PropTypes:
    //	label: PropTypes.string.isRequired,
    //	onClick: PropTypes.func,
};

export default Second;
