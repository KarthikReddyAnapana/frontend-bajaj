import React, { useState, useEffect } from 'react';
import TextInput from './components/TextInput';
import MultiSelectDropdown from './components/MultiSelectDropdown';
import ResponseDisplay from './components/ResponseDisplay';

const options = ["Alphabets", "Numbers", "Highest lowercase alphabet"];

const App = () => {
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [filteredResponse, setFilteredResponse] = useState(null);

  useEffect(() => {
    document.title = 'AP21110010028'; // Replace 'Your Roll Number' with your actual roll number
  }, []);

  const handleValidJsonSubmit = (jsonInput) => {
    // Call the backend API
    fetch('YOUR_BACKEND_API_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonInput),
    })
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data);
        setFilteredResponse(null); // Reset the filtered response
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleSelectChange = (selected) => {
    setSelectedOptions(selected);
    // Filtering logic based on selected options
    if (apiResponse) {
      let filtered = {};
      if (selected.includes('Alphabets')) {
        filtered.alphabets = apiResponse.alphabets;
      }
      if (selected.includes('Numbers')) {
        filtered.numbers = apiResponse.numbers;
      }
      if (selected.includes('Highest lowercase alphabet')) {
        filtered.highestLowercase = apiResponse.highestLowercase;
      }
      setFilteredResponse(filtered);
    }
  };

  return (
    <div>
      <h1>Your Roll Number</h1>
      <TextInput onValidSubmit={handleValidJsonSubmit} />
      {apiResponse && (
        <div>
          <MultiSelectDropdown options={options} onSelect={handleSelectChange} />
          {filteredResponse && <ResponseDisplay response={filteredResponse} />}
        </div>
      )}
    </div>
  );
};

export default App;
