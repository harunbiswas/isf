import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import DOMPurify from "dompurify";
import React, { useState } from "react";

const Map = () => {
  const [center, setCenter] = useState({ lat: 13.68399, lng: 100.64073 });
  const [zoom, setZoom] = useState(13);
  const [isApiLoaded, setIsApiLoaded] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const markers = [
    {
      position: { lat: 13.66288, lng: 100.60172 },
      icon: "/images/logo-1-2.png",
      title: " 3C - Tonsai ",
      details: " Fast food restaurant",
      url: `https://www.google.com/maps/dir/?api=1&destination=13.66288,100.60172`,
    },
    {
      position: { lat: 13.67575, lng: 100.64073 },
      icon: "/images/logo-1-2.png",
      title: "3C - Head Office",
      details: " Corporate office.",
      url: `https://www.google.com/maps/dir/?api=1&destination=13.67575,100.64073`,
    },
    {
      position: { lat: 13.70565, lng: 100.6005 },
      icon: "/images/logo-1-2.png",
      title: "3C- Lotus Sukhumvit ",
      details: " Fast food restaurant.",
      url: `https://www.google.com/maps/dir/?api=1&destination=13.70565,100.6005`,
    },
    {
      position: { lat: 13.6571, lng: 100.67826 },
      icon: "/images/logo-1-2.png",
      title: "3C - Foodie BangNa ",
      details: " Fast food restaurant.",
      url: `https://www.google.com/maps/dir/?api=1&destination=13.6571,100.67826`,
    },
  ];

  const sanitizeHtml = (html) => {
    return { __html: DOMPurify.sanitize(html, { ALLOWED_TAGS: ["strong"] }) };
  };

  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyDYNu6tHPINrxFP7-OlbGRTi0mNpn06nMw"}
      onLoad={() => setIsApiLoaded(true)}
    >
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "400px",
          borderRadius: "15px",
        }}
        center={center}
        zoom={zoom}
        options={{
          zoomControl: true,
          fullscreenControl: true,
          streetViewControl: false,
          mapTypeControl: true,
        }}
      >
        {isApiLoaded &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              position={marker.position}
              icon={{
                url: marker.icon,
                scaledSize: new window.google.maps.Size(20, 20),
              }}
              onMouseOver={() => setSelectedMarker(marker)}
            />
          ))}

        {selectedMarker && (
          <InfoWindow
            position={selectedMarker.position}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="map-details">
              <a
                href={selectedMarker.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>{selectedMarker?.title}</strong>
              </a>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Map);
