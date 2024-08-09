import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems = [] } = location.state || {};
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  // Form state for user information
  const [formData, setFormData] = React.useState({
    houseAddress: '',
    state: '',
    pincode: '',
    phone: '',
    altPhone: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send data to server for payment processing
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cartItems, totalPrice, formData }),
      });

      if (!response.ok) {
        throw new Error('Checkout failed!');
      }

      const data = await response.json();

      // Show a popup message and navigate to a confirmation page
      alert('Your order has been placed successfully!');
      navigate('/confirmation'); // Navigate to confirmation or clear cart as needed
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Your order has been placed successfully!');
      navigate('/');
    }
  };

  return (
    <div className="checkout-container h-screen w-full flex flex-col items-center justify-between bg-gray-300 p-4">
      <h1 className="text-2xl mb-4">Checkout</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white p-6 rounded shadow-md">
        <div className="form-group mb-4">
          <label htmlFor="houseAddress" className="block text-gray-700">House Address:</label>
          <input
            type="text"
            name="houseAddress"
            id="houseAddress"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={formData.houseAddress}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="state" className="block text-gray-700">State:</label>
          <input
            type="text"
            name="state"
            id="state"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="pincode" className="block text-gray-700">Pincode:</label>
          <input
            type="text"
            name="pincode"
            id="pincode"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone Number:</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="altPhone" className="block text-gray-700">Alternate Phone Number:</label>
          <input
            type="tel"
            name="altPhone"
            id="altPhone"
            className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            value={formData.altPhone}
            onChange={handleChange}
          />
        </div>
        <div className="cart-summary mb-4">
          <h2 className="text-xl mb-2">Order Summary</h2>
          <ul className="list-disc list-inside mb-2">
            {cartItems.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item.name} - Rs.{item.price}
              </li>
            ))}
          </ul>
          <p className="font-bold text-lg"></p>
        </div>
        <button type="submit" className="px-6 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
