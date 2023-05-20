import React, { useState, useEffect } from 'react';
import "./pagesStyles/Preloader.css"

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 10000); // Change time to your desired duration
    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading ? 
      <div className="preloader">
        <div className="spinner"></div>
      </div>
      : null
  );
};

export default Preloader;