import React from "react";
import "../styles/spinner.css"; // Import CSS file for styling

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
