import React, { Component } from 'react';
import NavigationService from 'services/NavigationService';
import './Home.css';



class Home extends Component {
    
    componentDidMount() {
        setTimeout(function() {
            NavigationService.currentlyNavigating = false;
        }, 1000);
        this.animateIn();
        this.wrapAkta();
    }
    
    animateIn = () => {
        let d = document;
        let aktaWrapper = d.getElementsByClassName('AktaWrapper')[0];
        let header = d.getElementsByClassName('Header')[0];
        aktaWrapper.className += ' AktaIn';
        header.className += ' HeaderIn';
    }
    
    wrapAkta = () => {
        let d = document;
        var akta = d.getElementsByClassName('Akta')[0];
        let aktaSpan = akta.innerHTML;
        let wrappedAkta = '';
        [...aktaSpan].forEach((aktaChar, index) => {
            aktaChar = '<span>' + aktaChar + '</span>';
            wrappedAkta += aktaChar;
        });
        akta.innerHTML = wrappedAkta;
    }

    render() {
        return (
            <div className="Home">
                <h1 className="Header">Se upp för dig själv.</h1>
                <div className="AktaWrapper">
                    <h2 className="Akta">AKTA</h2>
                </div>
            </div>
        );
    }
}

export default Home;
