import React, {Component} from 'react'
import {render} from 'react-dom'

import SaberBarChart from "../../src/SaberBarChart/SaberBarChart.js";

class Demo extends Component {
  
  
  
  
    render() {
    return <div>
      <h1>saber-bar-chart Demo</h1>
      <SaberBarChart
        ColorArray = {this.colors}
        Bars = {this.barData}
      />
    </div>
  }

  colors = ["red", "green", "blue", "purple"]
  barData=[
    {
        label: "EF76 Nebulon-B escort frigate",
        value: 854,
        details: {
            "name": "EF76 Nebulon-B escort frigate", 
            "model": "EF76 Nebulon-B escort frigate", 
            "manufacturer": "Kuat Drive Yards", 
            "cost_in_credits": "8500000", 
            "length": "300", 
            "max_atmosphering_speed": "800", 
            "crew": "854", 
            "passengers": "75", 
            "cargo_capacity": "6000000", 
            "consumables": "2 years", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "40", 
            "starship_class": "Escort ship", 

        },
    },
    {
        label: "Trade Federation cruiser",
        value: 600,
        details: {
            "name": "Trade Federation cruiser", 
            "model": "Providence-class carrier/destroyer", 
            "manufacturer": "Rendili StarDrive, Free Dac Volunteers Engineering corps.", 
            "cost_in_credits": "125000000", 
            "length": "1088", 
            "max_atmosphering_speed": "1050", 
            "crew": "600", 
            "passengers": "48247", 
            "cargo_capacity": "50000000", 
            "consumables": "4 years", 
            "hyperdrive_rating": "1.5", 
            "MGLT": "unknown", 
            "starship_class": "capital ship",
        },
    },
    {
        label: "Droid control ship",
        value: 175,
        details: {
            "name": "Droid control ship", 
            "model": "Lucrehulk-class Droid Control Ship", 
            "manufacturer": "Hoersch-Kessel Drive, Inc.", 
            "cost_in_credits": "unknown", 
            "length": "3170", 
            "max_atmosphering_speed": "n/a", 
            "crew": "175", 
            "passengers": "139000", 
            "cargo_capacity": "4000000000", 
            "consumables": "500 days", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "unknown", 
            "starship_class": "Droid control ship", 
        },
    },
    {
        label: "Republic Assault ship",
        value: 700,
        details: {
            "name": "Republic Assault ship", 
            "model": "Acclamator I-class assault ship", 
            "manufacturer": "Rothana Heavy Engineering", 
            "cost_in_credits": "unknown", 
            "length": "752", 
            "max_atmosphering_speed": "unknown", 
            "crew": "700", 
            "passengers": "16000", 
            "cargo_capacity": "11250000", 
            "consumables": "2 years", 
            "hyperdrive_rating": "0.6", 
            "MGLT": "unknown", 
            "starship_class": "assault ship", 
        },
    },
    {
        label: "Millennium Falcon",
        value: 4,
        details: {
            "name": "Millennium Falcon", 
            "model": "YT-1300 light freighter", 
            "manufacturer": "Corellian Engineering Corporation", 
            "cost_in_credits": "100000", 
            "length": "34.37", 
            "max_atmosphering_speed": "1050", 
            "crew": "4", 
            "passengers": "6", 
            "cargo_capacity": "100000", 
            "consumables": "2 months", 
            "hyperdrive_rating": "0.5", 
            "MGLT": "75", 
            "starship_class": "Light freighter",
        },
    },
]
}

render(<Demo/>, document.querySelector('#demo'))
