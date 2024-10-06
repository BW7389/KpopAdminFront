// src/components/errors/Unauthorized.js
import React from 'react';
import '../errors/Error.css';

const Unauthorized = () => {
  return (
    <div className="error-container">
      <h1>401 Unauthorized</h1>
      <p>You do not have permission to view this page.</p>
    </div>
  );
};

export default Unauthorized;
