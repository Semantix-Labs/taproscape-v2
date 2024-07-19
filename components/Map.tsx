import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../styles/Map.module.css';

// Define the custom icon
const customIcon = L.icon({
  iconUrl: '/location.svg', 
  iconSize: [38, 38],
  iconAnchor: [19, 38], 
  popupAnchor: [0, -38] 
});

const Map: React.FC = () => {
  return (
    <MapContainer center={[6.886143668540834, 79.88693861664376]} zoom={10} className={styles.map}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[6.886143668540834, 79.88693861664376]} icon={customIcon}>
        <Popup>
        Taproscape
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
