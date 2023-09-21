import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <>
      <MapContainer
        center={[-25.1594881,-57.4514237]}
        zoom={13}
        scrollWheelZoom={false}
        className="location-maps-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[-25.1594881,-57.4514237]}>
          <Popup>
            Jiggly Gourmet
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
