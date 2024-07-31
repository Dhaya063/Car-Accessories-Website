// // src/components/Search.js
// import React, { useState } from 'react';
// import '../styles/components/Search.css'; // Add your CSS styles here

// const Search = ({ onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = () => {
//     onSearch(searchTerm);
//     setSearchTerm(''); // Clear the input field after search
//   };

//   return (
//     <div className="search-container">
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search..."
//         className="search-input"
//       />
//       <button onClick={handleSearch} className="search-button">
//         Search
//       </button>
//     </div>
//   );
// };

// export default Search;

// src/components/Search.js
import React, { useState } from 'react';
import '../styles/components/Search.css'; // Add your CSS styles here

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm.trim()); // Trim spaces before searching
    setSearchTerm(''); // Clear the input field after search
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search..."
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;
