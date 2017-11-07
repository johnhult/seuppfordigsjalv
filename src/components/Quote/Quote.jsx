import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Quote.css';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.style = {
            left: this.props.posX + 'vw',
            right: this.props.posXRight + 'vw',
            top: this.props.posY + 'vh',
            bottom: this.props.posYBot + 'vh',
        };
    }
    
    componentDidMount() {
    }

    render() {
        return (
            <quote className="Quote" style={this.style}>{this.props.q}</quote>
        );
    }
}

Quote.defaultProps = {
    //	Example defaultProps
    //	label: 'click me'
};

Quote.PropTypes = {
    //	Example PropTypes:
    //	label: PropTypes.string.isRequired,
    //	onClick: PropTypes.func,
    quote: PropTypes.string.isRequired,
    posX: PropTypes.number,
    poxXRight: PropTypes.number,
    posY: PropTypes.number,
    posYBot: PropTypes.number
};

export default Quote;
