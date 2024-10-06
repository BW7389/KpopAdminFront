// src/components/auth/LoginForm.js
import React, { useState } from 'react';
import InputField from '../shared/InputField';
import Button from '../shared/Button';
import '../../assets/styles/Login.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Logic đăng nhập tại đây
      console.log('Login with:', { email, password });
    };
  
    const goToRegister = () => {
      navigate('/register'); // Chuyển hướng đến trang đăng ký
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
            />
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button text="Login" />
          </form>
          <p>Don't have an account? <span className="toggle-link" onClick={goToRegister}>Register</span></p>
        </div>
      </div>
    );
  };
  
  export default LoginForm;