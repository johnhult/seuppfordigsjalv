import React, { Component } from 'react';
import NavigationService from 'services/NavigationService';

class NoPageFound extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    componentDidMount() {
        setTimeout(function() {
            NavigationService.currentlyNavigating = false;
        }, 1000);
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
