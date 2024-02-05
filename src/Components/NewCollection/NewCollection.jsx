import React from 'react';
import new_collections from '../Assets/new_collections'; 
import Item from '../Items/Items';
import './NewCollection.css';

const NewCollection = () => {
  return (
    <div className="new_collection">
      <h1>New Collections</h1>
        <hr />
      <div className="item_collection">
        {
          new_collections.map((item, index) => (
            <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))
        }
      </div>
    </div>
  );
};

export default NewCollection;
