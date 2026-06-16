import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapSection() {
  return (
    <MapContainer
      center={[-9.19, -75.015]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[-12.0464, -77.0428]}>
        <Popup>Lima, Perú</Popup>
      </Marker>
    </MapContainer>
  );
}