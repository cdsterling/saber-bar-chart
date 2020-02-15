import React, { Component } from 'react';
import './SaberBarChart.css';
import SaberBar from '../SaberBar/SaberBar.js';


class SaberBarChart extends Component {

    createClickHandler = (barDetails) => {
        // bar details an object of key value pairs that will be
        // in the bod of an alert message to the user when that user
        // clicks on the bar
        let detailString =""
        
        Object.keys(barDetails).forEach(key => {
            let value = barDetails[key];
            //use key and value here
            detailString += key + ": " + value + "\n"
          });
        return(
            alert(detailString)
        );
    }

    

    //Example of an HTML Audio/Video Method
    playAudio() {
        // alert("mouseOverTriggered");
        let audio1 = document.getElementById("audioID");
        console.log("audio1: ",audio1);
        audio1.play();
    }

        

    render() {
        let barColorArray = [];
        if( this.props.ColorArray === null){
            //if the color array is empty then we default to our original green and red colors
            barColorArray.push("#8CBA51");
            barColorArray.push("#C9485B");
            console.log('default color array created: ', barColorArray);
        }
        else{
            barColorArray = [...this.props.ColorArray];
        }
        let allBars = this.props.Bars;
        let i = 0;
        let maxVal= 0; 
                for (let singleBar of allBars){
                    let index = i % barColorArray.length;
                    // console.log("i: "+ i + " index: "+ index+ " length: "+ barColorArray.length)
                    singleBar["barColor"] = barColorArray[index];
                    i++;
                    console.log("updated bar with color: ", singleBar);
                    if (singleBar.value > maxVal){
                        maxVal = singleBar.value;
                    }
                }

        return (
            //Properties: barLabel, barValue, barValueMax, barColor, ClickBar
            
            <div className="BarChart-container">
                <div id="space">
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
                <div className="stars"></div>
            </div>
            <audio id="audioID">
                <source src="../audio/saber.m4a" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {
                allBars.map( (currentBar, index) => (
                    <SaberBar
                        MouseEnter={() => this.playAudio()}
                        barLabel = {currentBar.label}
                        barValue = {currentBar.value}
                        barValueMax = {maxVal}
                        barColor = {currentBar.barColor}
                        barNum = {index}
                        ClickBar = {() => this.createClickHandler(currentBar.details)}
                    />
                ))
            }
            </div>
        );
    }

}

export default SaberBarChart;
