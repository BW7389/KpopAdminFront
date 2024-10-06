// src/components/shared/InputField.js
import React from 'react';
import '../../assets/styles/SharedStyles.css'; // CSS chung cho các thành phần chia sẻ

const InputField = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      className="kpop-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
