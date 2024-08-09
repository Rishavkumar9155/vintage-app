// AddProduct.js
import React, { useState } from 'react';
import Sidenavbar from './Sidenavbar';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    imageLink: '',
    name: '',
    price: '',
    description: '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(formData);
    localStorage.setItem('products', JSON.stringify(products));
    navigate('/Newitem');
  };

  return (
    <div className='flex'>
      <Sidenavbar/>
      <div className="w-full h-screen p-10 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 mt-10">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
          <div>
            <label className="block mb-1">Image Link</label>
            <input
              type="text"
              name="imageLink"
              value={formData.imageLink}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
