import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnsplashImages = ({ latitude, longitude }) => {
  const [images, setImages] = useState([]);
  const UNSPLASH_ACCESS_KEY = 'YOUR_UNSPLASH_ACCESS_KEY'; // Replace with your Unsplash API key

  useEffect(() => {
    if (latitude && longitude) {
      const fetchImages = async () => {
        try {
          const response = await axios.get(`https://api.unsplash.com/photos/random`, {
            params: {
              query: `${latitude},${longitude}`,
              count: 10, // Number of images to fetch
              client_id: UNSPLASH_ACCESS_KEY,
            },
          });
          setImages(response.data);
        } catch (error) {
          console.error('Error fetching images from Unsplash:', error);
        }
      };

      fetchImages();
    }
  }, [latitude, longitude, UNSPLASH_ACCESS_KEY]);

  return (
    <div>
      <h1>Images Near You</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.id} style={{ margin: '10px' }}>
            <img src={image.urls.small} alt={image.alt_description} style={{ width: '200px', height: '200px' }} />
            <p>{image.description || 'No description available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnsplashImages;
