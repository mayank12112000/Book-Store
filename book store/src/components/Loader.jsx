import React from 'react';
import './loader.css';

// loader component to show in case of api response delay or failure
const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
