import React, { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";
import "tailwindcss/base.css";
import "tailwindcss/components.css";
import "tailwindcss/utilities.css";
import getAllImages from "../api/images";

const API_KEY = import.meta.env.VITE_GALLERY_API_KEY;

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchImg = async () => {
      const data = await getAllImages(API_KEY);
      setPhotos(data.hits);
    };
    fetchImg();
  });

  return (
    <div>
      <header className="header">
        <div className="time">{currentTime.toLocaleTimeString()}</div>
        <div className="icons"></div>
      </header>

      <div className="gallery">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default App;
