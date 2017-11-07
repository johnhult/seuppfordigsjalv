import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavigationService from 'services/NavigationService';
import './Navigation.css';

const boxStyle = {
    position: 'fixed',
    right: 0,
    zIndex: 100
};

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    
    componentDidMount() {
        let vh = window.innerHeight;
        let n = document.getElementsByClassName('Navigation')[0];
        
        n.style.top = (vh/2) - (n.offsetHeight/2) + 'px';
    }
    
    render() {
        let navListItem = Object.keys(NavigationService.fullRoutes).map((keyName, index) => (
            <li className="RoundNav" key={index}>
                <div className={'Indicator ' + (NavigationService.fullRoutes[keyName].url === '' ? 'selected' : '')} onClick={() => NavigationService.goTo(NavigationService.fullRoutes[keyName].url, this.props.history)}></div><span>{NavigationService.fullRoutes[keyName].name}</span>
            </li>
        ));
        
        return (
            <ul className="Navigation" style={boxStyle}>
                {navListItem}
            </ul>
        );
    }
}

Navigation.defaultProps = {
    //	Example defaultProps
    //	label: 'click me'
};

Navigation.PropTypes = {
    //	Example PropTypes:
    //	label: PropTypes.string.isRequired,
    //	onClick: PropTypes.func,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default withRouter(Navigation);
