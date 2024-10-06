// src/components/errors/BadGateway.js
import React from 'react';
import '../errors/Error.css';

const BadGateway = () => {
  return (
    <div className="error-container">
      <h1>502 Bad Gateway</h1>
      <p>The server received an invalid response from the upstream server.</p>
    </div>
  );
};

export default BadGateway;
