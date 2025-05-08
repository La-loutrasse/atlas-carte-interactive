import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CustomMap = () => {
  return (
    <div className="h-[80vh] w-full rounded-lg overflow-hidden shadow-md mt-6">
      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={13}
        scrollWheelZoom
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />
        <Marker position={[48.8566, 2.3522]}>
          <Popup>
            Ici c'est <strong>Paris</strong> !
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CustomMap;