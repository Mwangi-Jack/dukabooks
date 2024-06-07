'use client'

import React, { useState } from 'react';

const FloatingLabelInput = ({ label, type = 'text' }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(value !== '');

  // const handleInputChange = (e) => {
  //   if (name === "username"){
  //     setForm({...form, "username": e.target.value})
  //   } else if (name === "email"){
  //     setForm({...form, "email": e.target.value})
  //   }
  // }

  return (
    <div className="relative my-4">
      <input
        type={type}
        onFocus={handleFocus}
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
