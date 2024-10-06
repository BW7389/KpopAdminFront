// src/components/shared/Button.js
import React from 'react';
import '../../assets/styles/SharedStyles.css'; // CSS chung cho các thành phần chia sẻ

const Button = ({ text }) => {
  return <button type="submit" className="kpop-button">{text}</button>;
};

export default Button;
