// src/components/auth/LoginForm.js
import React, { useState } from 'react';
import InputField from '../shared/InputField';
import Button from '../shared/Button';
import '../../assets/styles/Login.css';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../services/apiService';
import apiEndpoints from '../../services/apiEndpoints'; 

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await ApiService.postData(apiEndpoints.login, { email, password });
      console.log('Login successful:', response);
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.response?.data?.message || 'Invalid email or password.'); // Provide error message from response if available
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome to Kpop World</h2>
        <form onSubmit={handleLogin}>
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Add required validation
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Add required validation
          />
          {error && <p className="error-message">{error}</p>}
          <Button text={loading ? "Logging in..." : "Login"} disabled={loading} /> {/* Disable button while loading */}
        </form>
        <p>Don't have an account? <span className="toggle-link" onClick={goToRegister}>Register</span></p>
      </div>
    </div>
  );
};

export default LoginForm;
