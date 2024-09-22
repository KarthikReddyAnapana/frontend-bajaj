import React, { useState } from 'react';

const TextInput = ({ onValidSubmit }) => {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState('');

  const validateJson = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      setError('');
      onValidSubmit(parsedJson); // Pass valid JSON to parent
    } catch (e) {
      setError('Invalid JSON format');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder='Enter JSON'
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
      />
      <button onClick={validateJson}>Submit</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default TextInput;
