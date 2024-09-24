"use client";
import React from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 37.7749, // Default latitude
  lng: -122.4194, // Default longitude
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={"AIzaSyDYNu6tHPINrxFP7-OlbGRTi0mNpn06nMw"}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
        <Marker
          position={{
            lat: 36.7849, // Default latitude
            lng: -121.4194, // Default longitude
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
