import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import AppRoutes from './routes/AppRoutes'; // Đảm bảo import đúng
import ErrorBoundary from './components/errors/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Router> {/* Bao quanh AppRoutes bằng Router */}
        <div className="app-container">
          <AppRoutes />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
