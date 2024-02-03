import React from 'react';
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
   <div className="Offer">
        <div className="offer_left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p> ONLY ONE BEST SELLERS PRODUCTS</p>
            <button>check now</button>
        </div>
        <div className="offer_right">
    <img src={exclusive_image} alt="" />
        </div>
   </div>
  );
};

export default Offers;