import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const cities = [
  'Delhi', 'Patna', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Ahmedabad',
  'Chennai', 'Kolkata', 'Pune', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur',
  'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Vadodara', 'Ghaziabad'
];

const PartnerSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length > 0) {
      const filteredSuggestions = cities.filter(city =>
        city.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  
  return (
    <div className="w-full max-w-4xl mx-auto p-6 mt-32">
      <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-10">Search for a Event Organisers In Your Location</h1>
      <div className="relative flex items-center mt-16">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-4 md:py-5 text-lg md:text-xl border rounded"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <FaSearch className="absolute left-2 text-gray-400 text-xl md:text-2xl" />
        <button
          className="py-4 md:py-5 px-6 ml-2 bg-blue-500 text-white rounded font-semibold text-lg md:text-xl"
          onClick={() => setSuggestions(cities.filter(city => city.toLowerCase().includes(query.toLowerCase())))}
        >
          Search
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="border rounded mt-2 bg-white">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-3 text-lg md:text-xl cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setQuery(suggestion);
                setSuggestions([]);
                // navigate(`/city/${suggestion}`);
                navigate('/city',{ state: { suggestion: suggestion } });
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PartnerSearch;
