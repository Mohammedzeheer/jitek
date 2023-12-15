import React, { useState } from 'react';
import './InputShortner.css'
import { Axios } from '../../api/axiosInstance';



function InputShortner() {
  const [originalURL, setOriginalURL] = useState('');
  const [shortenedUrl,setShortenedUrl]=useState('')
  const Token = localStorage.getItem('user');
  const headers = { authorization: Token };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('shorten', {
        originalUrl: originalURL,
      });
      console.log(response);

      setShortenedUrl(response.data.shortUrl);
    } catch (error) {
      console.log('Error:', error);
    }
  };

     

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.get(`/shortCode`, { params: { shortenedUrl } });
      // const response = await Axios.get(`/${shortenedUrl}`);
      console.log('Response:', response); 
      console.log('Original URL:', response.data.originalUrl); 
  
      if (response.data.originalUrl) {
        window.location.href = response.data.originalUrl;
      } else {
        console.log('Original URL not found in the response.');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };
  

  return (
    <>
      <div className="InputContainer m-2">
        <h1>
          URL <span> Shortner</span>
        </h1>
        <div>
          <input
            type="text"
            placeholder="Paste the link to shortern it"
            value={originalURL}
            onChange={(e) => setOriginalURL(e.target.value)}
          />
          <button className='hover:bg-orange-500' onClick={handleSubmit}>Shorten</button>
        </div>
      </div>
     
      {shortenedUrl && (
        <div>
          <p className='text-white'>
            Shortened URL: <a className='underline' href={shortenedUrl} onClick={handleSearch}>{shortenedUrl}</a>
          </p>
        </div>
      )}
     </>
  );
}

export default InputShortner;

