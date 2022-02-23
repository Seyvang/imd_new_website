import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import { Container } from "react-bootstrap";

const containerStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
};
export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <>
        <Map
          google={this.props.google}
          zoom={16}
          initialCenter={{
            lat: 40.19796621812383,
            lng: -74.65117848554831,
          }}
          containerStyle={containerStyle}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      </>
    );
  }
}

// const LoadingContainer = (props) => (
//     <Container className="justify-content-center">

//     </Container>
//   )
export default GoogleApiWrapper({
  api_key: "AIzaSyBlzhBdWLWr8xqdq5y4P4Y5Esr3IfcdgNA",
})(MapContainer);
