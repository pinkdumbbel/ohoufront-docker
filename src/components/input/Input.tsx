import React from 'react';
import './style.css';

interface InputType {
  placeholder?: string;
}

const Input: React.FC<InputType> = ({ placeholder = '' }) => {
  return <input className="default-input" autoComplete="off" placeholder={placeholder} />;
};

export default Input;
