"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define your map container style
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

// Set default location and zoom
const center = {
  lat: 37.7749, // Example: Karachi, Pakistan
  lng: -122.4194,
};

const GoogleMapComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        {/* Add a marker at the center location */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
