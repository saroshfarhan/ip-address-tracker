import React, { useEffect } from "react";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import markerIcon from "../assets/images/icon-location.svg";
import L from "leaflet";

function getIcon() {
  return L.icon({
    iconUrl: markerIcon,
  });
}

function Map({ lat, lon, city, region }) {
  let position = [lat, lon];
  let zoom = 13;
  console.log(position);

  function LocationMarker(props) {
    const map = useMap();

    useEffect(() => {
      map.flyTo(props.position, props.zoom);
    });

    return null;
  }

  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ width: "100vw", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={getIcon()}>
        <Popup>
          {city} <br /> {region}
        </Popup>
      </Marker>
      <LocationMarker position={position} zoom={zoom} />
    </MapContainer>
  );
}

export default Map;
