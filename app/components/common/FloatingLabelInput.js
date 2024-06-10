'use client'

import React, { useState } from 'react';

const FloatingLabelInput = ({ label, value, name, handleChange,type }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(value !== '');


  return (
    <div className="relative my-4">
      <input
        type={type}
        name={name}
        value={value}
        required={true}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:border-[#004940] transition-all duration-200"
      />
      <label
        className={`absolute left-3 px-1 bg-white transition-all duration-200 pointer-events-none ${
          isFocused || value
            ? 'text-sm -top-3.5 text-gray-600'
            : 'top-2 text-gray-400'
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
