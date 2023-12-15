import React, { useState } from 'react';
import './Search.css'
import { Axios } from '../../api/axiosInstance';


function Search() {
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [originalUrl, setOriginalUrl] = useState('');
  const Token = localStorage.getItem('user');
  const headers = { authorization: Token };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.get(`http://localhost:3000/${shortenedUrl}`);
      setOriginalUrl(response.data.originalUrl);
      window.location.href = response.data.originalUrl;
    } catch (error) {
      console.error('Error:', error.response.data);
    }
  };



  return (
      <div className="InputContainer m-2">
        <div>
          <input
            type="text"
            placeholder="Search Shortern Code"
            value={shortenedUrl}
            onChange={(e) => setShortenedUrl(e.target.value)}
          />
          <button className='hover:bg-green-500' onClick={handleSearch}>Search</button>
        </div>
      </div>
  );
}

export default Search;

