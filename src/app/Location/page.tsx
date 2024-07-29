import React, { useState, useEffect } from 'react';
import UnsplashImages from './Unsplash'; // Adjust the import path as needed

const Location = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div>
      <h1>Nearby Images</h1>
      {location.latitude && location.longitude ? (
        <UnsplashImages latitude={location.latitude} longitude={location.longitude} />
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default Location;
