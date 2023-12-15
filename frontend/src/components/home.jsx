import React from 'react';
import Navbar from './Navbar';
import '../../src/App.css'
import BackgroundAnimate from './Background/BackgroundAnimate';
import InputShortner from './InputShortner/InputShortner';

const Home = () => {
  return (
    <>
    <Navbar/>
     <BackgroundAnimate/>
    <div className='Container'>
    <InputShortner/>
  </div>
   </>
  );
};

export default Home;