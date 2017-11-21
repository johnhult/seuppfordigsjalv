import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Quote.css';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mw: {maxWidth: ''}
        };
        this.setStyle(this.props);
        this.mwHandler = () => {
            this.setMaxWidth(this.props);
        };
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.mwHandler);
        this.setMaxWidth(this.props);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.mwHandler);
    }
    
    componentWillReceiveProps = (nextProps) => {
        this.setStyle(nextProps);
        this.setMaxWidth(nextProps);
    }
    
    setMaxWidth = (props) => {
        let iw = window.innerWidth;
        if(iw >= 720) {
            let calculatedRightPosition = this.checkRightPositionBounds(props);
            if(calculatedRightPosition) {
                this.setState({
                    mw: {
                        maxWidth: 100 - calculatedRightPosition - 5 + 'vw'
                    }
                });
            }
            else {
                this.setState({
                    mw: {
                        maxWidth: 100 - props.posX - 150/(iw/100) + 'vw'
                    }
                });
            }
        }
        else {
            this.setState({
                mw: {
                    maxWidth: '90vw'
                }
            });
        }
    }
    
    checkRightPositionBounds(props) {
        let iw = window.innerWidth;
        let posXRightCalc;
        if(props.posXRight) {
            let posXRightInPixels = ((iw/100)*parseInt(props.posXRight, 10));
            posXRightInPixels = posXRightInPixels <= 150 ? 150 : posXRightInPixels;
            posXRightCalc = posXRightInPixels/(iw/100);
        }
        return posXRightCalc;
    }
    
    setStyle = (props) => {
        let calculatedRightPosition = this.checkRightPositionBounds(props);
        this.style = {
            left: props.posX ? props.posX + 'vw' : '',
            right: calculatedRightPosition ? calculatedRightPosition + 'vw' : '',
            top: props.posY ? props.posY + 'vh' : '',
            bottom: props.posYBot ? props.posYBot + 'vh' : '',
        };
    }

    render() {
        return (
            <quote className="Quote" style={{...this.style, ...this.state.mw}}>{this.props.q}</quote>
        );
    }
}

Quote.defaultProps = {
};

Quote.PropTypes = {
    quote: PropTypes.string.isRequired,
    posX: PropTypes.number,
    poxXRight: PropTypes.number,
    posY: PropTypes.number,
    posYBot: PropTypes.number
};

export default Quote;
