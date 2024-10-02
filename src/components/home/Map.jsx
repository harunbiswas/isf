"use client";
import React from "react";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "15px", // Add border radius here
  overflow: "hidden",
  // marginTop: "30px",
};

const center = {
  lat: 13.675673947066162, // Default latitude
  lng: 100.640691795568, // Default longitude
};

const customMarker = {
  url: "https://example.com/custom-marker.png",
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={"AIzaSyDYNu6tHPINrxFP7-OlbGRTi0mNpn06nMw"}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
