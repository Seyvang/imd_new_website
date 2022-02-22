import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, {Component} from 'react'

export class MapContainer extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           selectedPlace: "asdf" 
        }
      }
    render() 
        {
      return (
        <Map google={this.props.google} zoom={14}>
   
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          {/* <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      );
    }
  }

export default GoogleApiWrapper({
      api_key: ("AIzaSyBlzhBdWLWr8xqdq5y4P4Y5Esr3IfcdgNA"),


  })(MapContainer)
