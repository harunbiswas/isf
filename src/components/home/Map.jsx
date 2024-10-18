"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "15px",
  overflow: "hidden",
};

const center = {
  lat: 13.68399, // Default latitude
  lng: 100.64073,
};

const mapOptions = {
  zoomControl: true, // Enable zoom controls
  fullscreenControl: true, // Optional: Enable fullscreen control
  streetViewControl: false, // Optional: Disable street view control
  mapTypeControl: true, // Optional: Disable map type control
};

const Map = () => {
  const [isApiLoaded, setIsApiLoaded] = React.useState(false);

  const customMarker = isApiLoaded
    ? {
        url: "/images/logo-1-2.png", // Replace with your custom marker URL
        scaledSize: new window.google.maps.Size(20, 20), // Adjust the marker size
      }
    : null;

  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyDYNu6tHPINrxFP7-OlbGRTi0mNpn06nMw"}
      onLoad={() => setIsApiLoaded(true)}
    >
      <GoogleMap
        mapContainerClassName="map-container"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={mapOptions} // Add map options for zoom and control
      >
        {isApiLoaded && (
          <Marker
            position={{
              lat: 13.66288, // Default latitude
              lng: 100.60172, // Default longitude
            }}
            icon={customMarker}
          />
        )}{" "}
        {isApiLoaded && (
          <Marker
            position={{
              lat: 13.67575, // Default latitude
              lng: 100.64073, // Default longitude
            }}
            icon={customMarker}
          />
        )}{" "}
        {isApiLoaded && (
          <Marker
            position={{
              lat: 13.70565, // Default latitude
              lng: 100.6005, // Default longitude
            }}
            icon={customMarker}
          />
        )}{" "}
        {isApiLoaded && (
          <Marker
            position={{
              lat: 13.6571, // Default latitude
              lng: 100.67826, // Default longitude
            }}
            icon={customMarker}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
