// NewItem.js
import React from 'react';
import Sidenavbar from './Sidenavbar';

const NewItem = () => {
  const products = JSON.parse(localStorage.getItem('products')) || [];

  return (
    <div className='flex'>
      
      <div className="w-full h-screen p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 mt-10">New Items</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={product.imageLink} alt={product.name} className="w-full h-64 object-cover mb-4 rounded-md" />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">${product.price}</p>
                <p className="text-gray-700">{product.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No new items added.</p>
        )}
      </div>
    </div>
  );
};

export default NewItem;
