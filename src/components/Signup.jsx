import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};
    // Implement your validation logic here
    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }
    // ... other validation checks

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Submit form data (replace with your backend logic)
      console.log('Form submitted successfully!', formData);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
              aria-describedby="name-error"
            />
            {errors.name && (
              <p className="text-red-500 text-sm" id="name-error">
                {errors.name}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
              aria-describedby="email-error"
            />
            {errors.email && (
              <p className="text-red-500 text-sm" id="email-error">
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full"
              aria-describedby="password-error"
            />
            {errors.password && (
              <p className="text-red-500 text-sm" id="password-error">
                {errors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
          <br />
          <br />

          Have an Account ?<Link to="/Login" className='text-blue-700'>    Login</Link>
        </form>
      </div>
    </div>
  );
};

export default SignupForm