import React from "react";

const LoadingSpinner = () => (
  <div className="container py-5 text-center">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <h5 className="mt-3">Loading hotel details...</h5>
  </div>
);

export default LoadingSpinner;
