// src/components/auth/RegisterForm.js
import React, { useState } from 'react';
import InputField from '../shared/InputField';
import Button from '../shared/Button';
import '../../assets/styles/Register.css';
import { useNavigate } from 'react-router-dom';


const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
  
    const handleRegister = (e) => {
      e.preventDefault();
      if (password === confirmPassword) {
        console.log('Register with:', { username, email, password });
      } else {
        console.log('Passwords do not match');
      }
    };
  
    const goToLogin = () => {
      navigate('/'); 
    };
  
    return (
      <div className="register-container">
        <div className="register-box">
          <h2>Join the Kpop Community</h2>
          <form onSubmit={handleRegister}>
            <InputField
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <InputField
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button text="Register" />
          </form>
          <p>Already have an account? <span className="toggle-link" onClick={goToLogin}>Login</span></p>
        </div>
      </div>
    );
  };
  
  export default RegisterForm;