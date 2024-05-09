import React from 'react';
import LoadingGif from './loading.gif'; 

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <img src={LoadingGif} alt="Loading..." />
    </div>
  );
};

export default LoadingScreen;

