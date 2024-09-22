import React from 'react';

const MultiSelectDropdown = ({ options, onSelect }) => {
  const handleChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    onSelect(selectedOptions);
  };

  return (
    <select multiple={true} onChange={handleChange}>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default MultiSelectDropdown;
