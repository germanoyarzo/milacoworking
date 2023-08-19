import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapFooter = () => {
  const mapStyles = {
    width: '100%',
    height: '300px', // Ajusta la altura del mapa según tus necesidades
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  }; // Coordenadas para el centro del mapa (puedes ajustarlas según tu ubicación)

  return (
    <section id="ubicacion">
      <LoadScript googleMapsApiKey="TU_API_KEY_AQUI">
        <GoogleMap mapContainerStyle={mapStyles} center={defaultCenter} zoom={12}>
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </section>

  );
};

export default MapFooter;