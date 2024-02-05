import React from 'react';
import './NewLetters.css'

const NewLetters = () => {
  return (
    <div className='new-letters' >
        <h1> Get Execlusive offer in your mail   </h1>  
        <p>subscribe to out newsletters and stay updated</p> 

       <div>
       <input type="email" placeholder='drop your email id' />
        <button>Subscribe</button>   
       </div>
    </div>
  );
};

export default NewLetters;