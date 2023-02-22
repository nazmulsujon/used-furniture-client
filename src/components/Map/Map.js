import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [26.416, 50.104];

const Map = () => {
  return (
    <div className="">
      <MapContainer
        className="mx-auto rounded w-[350px] h-[300px] lg:w-[900px] lg:h-[450px] "
        center={position}
        zoom={12}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>Hail, Al Qadisiyah, Dammam 32247, Saudi Arabia</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
