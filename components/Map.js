import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

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
    </MapContainer>
  )
}

export default Map
