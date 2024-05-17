// components/SelectorButtons.js
import React from 'react';

export default function SelectorButtons({ type, options, selectedOption, handleClick }) {
  return (
    <div className={`selector-container ${type}`}>
      {options.map((option) => (
        <button
          key={option}
          className={`selector-button ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
