// src/components/errors/NotFound.js
import React from 'react';
import '../errors/Error.css';
import { FaSadTear } from 'react-icons/fa';

const NotFound = () => {
    return (
      <div className="error-container">
        <FaSadTear className="error-icon" />
        <h1>404 Not Found</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <a href="/" className="back-home">Go back to Home</a>
      </div>
    );
  };
  
  export default NotFound;
