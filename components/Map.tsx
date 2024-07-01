import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from '../styles/Map.module.css';

const Map: React.FC = () => {
  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={10} className={styles.map}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[40.7128, -74.0060]}>
        <Popup>
          New York City
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
