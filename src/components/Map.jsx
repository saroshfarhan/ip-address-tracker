import React from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";

import markerIcon from "../assets/images/icon-location.svg";
import L from "leaflet";

function getIcon() {
  return L.icon({
    iconUrl: markerIcon,
  });
}

function Map({ lat, lon }) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={15}
      scrollWheelZoom={false}
      style={{ width: "100vw", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={getIcon()}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
