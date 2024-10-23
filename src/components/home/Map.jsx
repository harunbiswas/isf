"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "15px",
  overflow: "hidden",
};

const mapOptions = {
  zoomControl: true,
  fullscreenControl: true,
  streetViewControl: false,
  mapTypeControl: true,
};

const Map = () => {
  const [center, setCenter] = useState({
    lat: 13.68399,
    lng: 100.64073,
  });
  const [zoom, setZoom] = useState(13);
  const [isApiLoaded, setIsApiLoaded] = React.useState(false);
  const router = useRouter(); // Initialize router

  const customMarker = isApiLoaded
    ? {
        url: "/images/logo-1-2.png",
        scaledSize: new window.google.maps.Size(20, 20),
      }
    : null;

  const smoothZoom = (currentZoom, targetZoom) => {
    const step = currentZoom < targetZoom ? 0.1 : -0.1;
    const interval = setInterval(() => {
      setZoom((prevZoom) => {
        if (
          (step > 0 && prevZoom >= targetZoom) ||
          (step < 0 && prevZoom <= targetZoom)
        ) {
          clearInterval(interval);
          return targetZoom;
        }
        return prevZoom + step;
      });
    }, 50);
  };

  const handleMarkerClick = (newCenter, targetZoom) => {
    // Open Google Maps with the latitude and longitude
    const googleMapsUrl = `https://www.google.com/maps?q=${newCenter.lat},${newCenter.lng}`;
    window.open(googleMapsUrl, "_blank"); // Open in a new tab
  };

  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyDYNu6tHPINrxFP7-OlbGRTi0mNpn06nMw"}
      onLoad={() => setIsApiLoaded(true)}
    >
      <GoogleMap
        mapContainerClassName="map-container"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        options={mapOptions}
        onZoomChanged={() => setZoom(zoom)}
      >
        {isApiLoaded && (
          <Marker
            onClick={() =>
              handleMarkerClick({ lat: 13.66288, lng: 100.60172 }, 18)
            }
            position={{ lat: 13.66288, lng: 100.60172 }}
            icon={customMarker}
          />
        )}
        {isApiLoaded && (
          <Marker
            onClick={() =>
              handleMarkerClick({ lat: 13.67575, lng: 100.64073 }, 18)
            }
            position={{ lat: 13.67575, lng: 100.64073 }}
            icon={customMarker}
          />
        )}
        {isApiLoaded && (
          <Marker
            onClick={() =>
              handleMarkerClick({ lat: 13.70565, lng: 100.6005 }, 18)
            }
            position={{ lat: 13.70565, lng: 100.6005 }}
            icon={customMarker}
          />
        )}
        {isApiLoaded && (
          <Marker
            onClick={() =>
              handleMarkerClick({ lat: 13.6571, lng: 100.67826 }, 18)
            }
            position={{ lat: 13.6571, lng: 100.67826 }}
            icon={customMarker}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
