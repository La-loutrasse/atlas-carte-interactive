import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import { CRS } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import backgroundImage from '@/assets/imgs/maps.jpg';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const imageBounds: [[number, number], [number, number]] = [
  [0, 0],
  [1440, 2068]
];

const CustomMap = () => {
  return (
    <div className="h-[80vh] w-full rounded-lg overflow-hidden shadow-md mt-6">
      <MapContainer
        crs={CRS.Simple}
        bounds={imageBounds}
        maxBounds={imageBounds}
        minZoom={-1}
        maxZoom={4}
        zoom={2}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <ImageOverlay url={backgroundImage} bounds={imageBounds} />

        <Marker position={[600, 300]} icon={L.icon({ iconUrl: markerIcon })}>
          <Popup>Point d'intérêt</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default CustomMap;
