import React from 'react';
import logo from './logo.svg';
import Dropdown from './components/Dropdown'
import Navbar from './components/Navbar';
import './App.css';
import './fonts/Inter-Black.ttf';
import ad from "./images/ad.gif"



function App() {
  return (
    <>
    
    <Navbar></Navbar>
    <div className='titie-container pt-52 flex-col items-center justify-center'>
      <p className='title text-center  text-black font-extrabold text-6xl pb-4'>Generate Dozens Of Accounts <br /> With The Click Of A Button!</p>
      <p className='service-description text-purp text-center text-xl'>Our accounts are not hacked, cracked or obtained illegally, all accounts are created by us and provided by us</p>
      </div>

      <div className='img flex pt-10 pb-52 justify-center items-center'>
      <img className='gif-ad' src={ad} alt="" />
      </div>
    
    
    
    </>
  
  );
}

export default App;
