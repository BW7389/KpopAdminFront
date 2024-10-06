// src/routes/AppRoutes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import NotFound from '../components/errors/NotFound';
import ServerError from '../components/errors/ServerError';
import Unauthorized from '../components/errors/Unauthorized';
import BadGateway from '../components/errors/BadGateway';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="/401" element={<Unauthorized />} />
        <Route path="/502" element={<BadGateway />} />
        {/* Route cho trang không tìm thấy */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
