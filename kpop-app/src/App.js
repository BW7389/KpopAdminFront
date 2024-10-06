// src/components/App.js
import React from 'react';
import AppRoutes from './routes/AppRoutes'; // Đảm bảo import đúng
import ErrorBoundary from './components/errors/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
    <div className="app-container">
      <AppRoutes />
    </div>
    </ErrorBoundary>
  );
};

export default App;
