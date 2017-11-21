import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavigationService from 'services/NavigationService';
import './Navigation.css';

// The flag that determines whether the wheel event is supported.
let supportsWheel = false;
let enoughScroll = 0;
let timeout;

const boxStyle = {
    position: 'fixed',
    right: 0,
    zIndex: 100
};

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: NavigationService.fullRoutes,
        };
        NavigationService.currentPage = this.getCorrectRouteObject(this.props.history.location.pathname);
    }
    
    componentDidMount() {
        this.addOrRemoveEventListener(true);
        
        if(NavigationService.currentPage === '404') {
            return;
        }
        else {
            this.setNavigationPosition();
        }
        
    }
    
    componentWillUnmount() {
        this.addOrRemoveEventListener(false);
    }
    
    componentWillUpdate(nextProps) {
        if(nextProps.history.action === 'POP') {
            NavigationService.currentPage = this.getCorrectRouteObject(this.props.history.location.pathname);
        }
    }
    
    componentDidUpdate() {
        if(NavigationService.currentPage === '404') {
            return;
        }
        else {
            this.setNavigationPosition();
        }
    }
    
    handleClick = (newPage, fastNav) => {
        NavigationService.goTo(newPage, this.props.history, fastNav);
    }

    handleScroll = (e) => {
        if(NavigationService.currentlyNavigating || NavigationService.currentPage === '404') {
            e.preventDefault();
            return;
        }
        if(timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        
        // If we're navigating we don't do this.
        if(NavigationService.currentlyNavigating) {
            return;
        }
        
        // Check whether the wheel event is supported
        if(e.type === 'wheel') {
            supportsWheel = true;
        }
        else if(supportsWheel) {
            return;
        }
        
        
        var delta = e.deltaY || -e.wheelDelta || e.detail;
        enoughScroll += delta;
        
        if(enoughScroll >= 100) {
            this.resetScroll();
            NavigationService.goTo(NavigationService.nextPage, this.props.history);
        }
        else if(enoughScroll <= -100) {
            this.resetScroll();
            NavigationService.goTo(NavigationService.prevPage, this.props.history);
        }
        
        timeout = window.setTimeout(() => {
            this.resetScroll();
        }, 500);
    }
    
    resetScroll = () => {
        enoughScroll = 0;
    }
    
    getCorrectRouteObject = (path) => {
        let r;
        Object.keys(this.state.routes).forEach((keyName) => {
            if(this.state.routes[keyName].url === path) {
                r = this.state.routes[keyName];
            }
        });
        if(!r) {
            r = '404';
        }
        return r;
    }


    addOrRemoveEventListener = (add) => {
        if(add) {
            // EventListeners for scrolling even though we have 100vh
            document.getElementsByTagName('html')[0].addEventListener('wheel', this.handleScroll);
            document.getElementsByTagName('html')[0].addEventListener('mousewheel', this.handleScroll);
            document.getElementsByTagName('html')[0].addEventListener('DOMMouseScroll', this.handleScroll);
        }
        else {
            document.getElementsByTagName('html')[0].removeEventListener('wheel', this.handleScroll);
            document.getElementsByTagName('html')[0].removeEventListener('mousewheel', this.handleScroll);
            document.getElementsByTagName('html')[0].removeEventListener('DOMMouseScroll', this.handleScroll);
        }
    }
    
    setNavigationPosition = () => {
        let vh = window.innerHeight;
        let n = document.getElementsByClassName('Navigation')[0];
        if(n) {
            n.style.top = (vh/2) - (n.offsetHeight/2) + 'px';
        }
    }
    
    render() {
        if(NavigationService.currentPage === '404') {
            return (
                <div className="NoPage">
                    <h1 className="NoPage404">404</h1>
                    <span className="BackToStart" onClick={() => this.handleClick(this.state.routes.Home, true)}>Tillbaka till start</span>
                </div>
            );
        }
        let navListItem = Object.keys(this.state.routes).map((keyName, index) => {
            return (
                <li className={'NavOuter ' + (this.state.routes[keyName].url === NavigationService.currentPage.url ? 'Selected' : '')} key={index} onClick={() => this.handleClick(this.state.routes[keyName])}>
                    <span className="NavName">{NavigationService.fullRoutes[keyName].name}</span>
                    <div className="Indicator"></div>
                </li>
            );
        });
        
        
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
