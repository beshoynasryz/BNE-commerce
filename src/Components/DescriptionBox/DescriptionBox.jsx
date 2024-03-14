import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>

        <div className="descriptionbox-description">
            <p>
            Online e-commerce, or website commerce,
             is the process of buying and selling products and services over the internet. 
             This involves using the internet as a platform for marketing products, communicating with customers,
             and completing commercial transactions.
              Online e-commerce provides a flexible and convenient shopping platform for consumers and opportunities
               for expansion and growth for stores and businesses.
            </p>
        </div>
     
    </div>
  );
};

export default DescriptionBox;