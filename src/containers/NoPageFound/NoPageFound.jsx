import React, { Component } from 'react';

class NoPageFound extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div></div>
        );
    }
}

NoPageFound.defaultProps = {
    //	Example defaultProps
    //	label: 'click me'
};

NoPageFound.PropTypes = {
    //	Example PropTypes:
    //	label: PropTypes.string.isRequired,
    //	onClick: PropTypes.func,
};

export default NoPageFound;
