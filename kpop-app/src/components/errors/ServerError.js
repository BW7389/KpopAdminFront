// src/components/errors/ServerError.js
import React from 'react';
import '../errors/Error.css';

const ServerError = () => {
  return (
    <div className="error-container">
      <h1>500 Internal Server Error</h1>
      <p>Something went wrong on our end. Please try again later.</p>
    </div>
  );
};

export default ServerError;
