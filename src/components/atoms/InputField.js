import React from 'react';

function InputField({ type = 'text', placeholder, value, onChange, className = '' }) {
  console.log('InputField value:', value);  // Debugging log
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    />
  );
}

export default InputField;
