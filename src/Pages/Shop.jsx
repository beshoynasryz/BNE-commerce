import React from 'react';

import Hero from '../Components/Hero/Hero';
import NewCollection from '../Components/NewCollection/NewCollection';
import NewLetters from '../Components/NewLetters/NewLetters';
import Offers from '../Components/Offers/Offers';
import Popular from '../Components/Popular/Popular';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular />
      <Offers/>
      <NewCollection/>
      <NewLetters />
    
    </div>
  );
};

export default Shop;