import React, {Component} from 'react';

class BackgroundCanvas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vw: window.innerWidth,
            vh: window.innerHeight
        };
        this.canvas = null;
        this.ctx = null;
//        this.line = {
//            firstBeizerPoint: {
//                x: 0,
//                y: 0
//            },
//            secondBeizerPoint: {
//                x: 0,
//                y: 0
//            },
//            expand: true
//        };
        this.circlePath = {
            center: {
                x: this.state.vw/2,
                y: this.state.vh/2
            },
            radius: this.state.vh/4,
            angle: 0
        };
    }
    
    updateDimensions = () => {
        this.setState({
            vw: window.innerWidth,
            vh: window.innerHeight
        });
        this.drawLine();
    }
    
    drawLine = () => {
        let points = [
            {
                x: 0,
                y: (this.state.vh*8)/10,
            },
            {
                x: (this.state.vw*3)/8,
                y: (this.state.vh*8)/10,
                beizer: {
                    x: (this.state.vw*3)/16,
                    y: (this.state.vh*6)/10
                }
                
            },
            {
                x: (this.state.vw*3)/4,
                y: this.state.vh,
                beizer: {
                    x: (this.state.vw*9)/16,
                    y: (this.state.vh*10)/10
                }
            },
            {
                x: 0,
                y: this.state.vh
            }
            
        ];
        
        // Clear canvas and begin new path
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        
        // Move to starting point
        this.ctx.moveTo(points[0].x, points[0].y);
        
        // Go through all points
        points.forEach((element, index) => {
            if(index === 0) {
                return;
            }
            if(points[index].hasOwnProperty('beizer')) {
//                console.log(points[index]);
                this.ctx.quadraticCurveTo(points[index].beizer.x, points[index].beizer.y, points[index].x, points[index].y);
            }
            else {
//                console.log(points[index]);
                this.ctx.lineTo(points[index].x, points[index].y);
            }
        });
//        this.ctx.bezierCurveTo(0, 0, 0, 0, this.state.vw, this.state.vh);
//        this.ctx.moveTo(0, this.canvas.height);
        this.ctx.fillStyle = '#000000';
        this.ctx.fill();
    }
    
    drawPath = () => {
//        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
//        this.ctx.beginPath();
//        this.ctx.moveTo(
//            this.circlePath.center.x + Math.cos(this.circlePath.angle) * this.circlePath.radius,
//            this.circlePath.center.y + Math.sin(this.circlePath.angle) * this.circlePath.radius
//        );
//        for (let i = 0; i < 360; i = i+360/10) {
//            this.circlePath.angle = i;
//            this.ctx.lineTo(
//                this.circlePath.center.x + Math.cos(this.circlePath.angle/10) * this.circlePath.radius,
//                this.circlePath.center.y + Math.sin(this.circlePath.angle/10) * this.circlePath.radius
//            );
//        }
//        this.ctx.strokeStyle = '#aaaaaa';
//        this.ctx.lineWidth = 5;
//        this.ctx.stroke();
    }
    
    draw = () => {
//        this.circlePath.angle += 0.1;
//        this.drawPath();
//        if(this.line.width >= 100) {
//            this.line.expand = false;
//        }
//        else if (this.line.width <= 0) {
//            this.line.expand = true;
//        }
//        if (this.line.expand) {
//            this.drawLine(this.line.width++);
//        }
//        else {
//            this.drawLine(this.line.width--);
//        }
        
        this.drawLine();
        window.requestAnimationFrame(this.draw);
    }
    
    componentDidMount() {
        this.canvas = document.getElementsByClassName('BackgroundCanvas')[0];
        this.ctx = this.canvas.getContext('2d');
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
        this.drawLine();
//        window.requestAnimationFrame(this.draw);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    
    render() {
        return (
            <canvas className="BackgroundCanvas" width={this.state.vw} height={this.state.vh}></canvas>
        );
    }
}

export default BackgroundCanvas;