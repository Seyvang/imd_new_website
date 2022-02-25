import { MapContainer, Marker, Popup, TileLayer, CircleMarker, Circle } from 'react-leaflet'
import '../node_modules/leaflet/dist/leaflet.css'
import L from 'leaflet'
const redOptions = { color: 'red' }
const coordinates = [40.19796621812383, -74.65117848554831]
const Map = () => {
  return (
    <MapContainer center={coordinates} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <CircleMarker
        center={coordinates}
        pathOptions={redOptions}
        radius={20}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      <Circle center={coordinates} pathOptions={redOptions} radius={200} />
    </MapContainer>
  )
}

export default Map
