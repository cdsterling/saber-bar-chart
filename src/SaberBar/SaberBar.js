import React, { Component } from 'react';
import './SaberBar.css';


class SaberBar extends Component {
    playAudio(audioID) {
        // alert("mouseOverTriggered");
        let barAudio = document.getElementById(audioID);
        console.log("barAudio: ",barAudio);
        barAudio.play();
    }
    
    render() {
        //Properties: barLabel, barDetails, barValue, barValueMax, barColor, ClickBar
        let barStyle = {
            height: 100*(Number(this.props.barValue) / this.props.barValueMax) + '%',
            background: this.props.barColor
        }
        return (

                <div 
                    className="SaberBar"
                    name={this.props.barLabel}
                    key={this.props.barNum}
                    onClick={this.props.ClickBar}
                    style={barStyle}
                    onMouseEnter={() => this.playAudio(`audio${this.props.barNum}`)}    
                >
                    {this.props.barLabel}
                    <audio id={`audio${this.props.barNum}`}>
                        <source src="../audio/saber.m4a" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
                
        );   
    }

}

export default SaberBar;
