/** @format */

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapView = () => {
  return (
    <div className=" h-[400px] w-[600px] mt-10 pr-15 relative">
      <MapContainer
        center={
          [56.6217, -3.8666] as [number, number]
        }
        zoom={10}
        scrollWheelZoom={false}
        className="h-full w-[600px] rounded-lg shadow-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[56.6217, -3.8666]}>
          <Popup>Aberfeldy</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
