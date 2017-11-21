import React, { Component } from 'react';
import Quote from 'components/Quote/Quote.jsx';
import NavigationService from 'services/NavigationService';
import './Fact.css';

class Fact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: NavigationService.currentPage
        };
    }
    
    componentDidMount() {
        setTimeout(function() {
            NavigationService.currentlyNavigating = false;
        }, 1000);
    }
    
    componentDidUpdate() {
        if(NavigationService.currentlyNavigating) {
            setTimeout(function() {
                NavigationService.currentlyNavigating = false;
            }, 1000);
        }
    }

    render() {
        const name = NavigationService.currentPage.name;
        let fact = null;
        if(name === 'En') {
            fact = (
                <div className="First Fact">
                    <Quote q="Under 2016 dog 98 personer av selfie-relaterade olyckor." posX="10" posYBot="20" />
                    <img className="FactImage" src={require('img/hand.jpg')} alt="Couldn't load"></img>
                </div>
            );
        }
        else if(name === 'Två') {
            fact = (
                <div className="Second Fact">
                    <Quote q="Akta så du inte biter dig själv i kinden. Den starkaste muskeln i den mänskliga kroppen är käkmuskeln." posX="30" posY="12" />
                    <img className="FactImage" src={require('img/kid.jpg')} alt="Couldn't load"></img>
                </div>
            );
            
        }
        else if(name === 'Tre') {
            fact = (
                <div className="Third Fact">
                    <Quote q="Mer än hälften av alla svenskar lider av övervikt eller fetma." posXRight="18" posYBot="12" />
                    <img className="FactImage" src={require('img/scream.jpg')} alt="Couldn't load"></img>
                </div>
            );
        }
        return (
            <div>
                {fact}
            </div>
        );
    }
}

Fact.defaultProps = {
    //	Example defaultProps
    //	label: 'click me'
};

Fact.PropTypes = {
    //	Example PropTypes:
    //	label: PropTypes.string.isRequired,
    //	onClick: PropTypes.func,
};

export default Fact;
