import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import React,  {useEffect, useState } from 'react'

const position = [51.505, -0.09]

function LeafletMaps() {

  useEffect(() => {

  })
  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default LeafletMaps