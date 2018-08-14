import React from "react";
import floorPlan from "./floorPlan.png";
import Details from "./Details/Details";
import mapArea from "./mapArea";
export default class FloorPlan extends React.Component {
    constructor() {
        super();
        this.state = {
            room: undefined
        }
    }

  roomClick(room) {
    this.setState({ room: room })
  }

  render() {
    return ( <div>
        <img src={floorPlan} width="845" height="624" border="0" useMap="#map" />
        {this.state.room && <Details room={this.state.room} />}
        <map name="map">      
         { mapArea().map((room)=> {
          return <area 
            onClick={() => this.roomClick(room)} 
            shape="rect" 
            coords={room.coords}
            key={room.id} 
           />
         }) 
          }
        </map>
      </div>
    )
  }
}
