// use this video to check how to make this googleMaps component
// https://www.youtube.com/watch?v=9e-5QHpadi0
import styled from "styled-components";
import { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "70%",
  height: "100%",
  borderRadius: "50%",
};

const GoogleMapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY, //need to define your google api key
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCenter({ lat: latitude, lng: longitude });
      },
      (error) => console.error(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [zoom, setZoom] = useState(15);

  if (loadError) {
    return <div>There was an error loading the map</div>;
  }

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      />
      <Marker position={{ lat: 44, lng: -80 }} />
    </>
  );
};

export default GoogleMapComponent;
