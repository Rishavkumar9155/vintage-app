// Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import thanks from "../../assets/Thanks.mp4";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const emptyCartMessage = (
    <div className="empty-cart h-screen w-full flex flex-col items-center justify-center relative overflow-hidden font-mono">
      <video className='h-full w-full object-cover absolute top-0 left-0' autoPlay muted loop src={thanks} />
      <Link to="/" className='absolute bottom-10'>
        <button className="px-6 py-2 text-xl backdrop-blur-sm bg-white/30 text-black font-mono rounded">Continue shopping</button>
      </Link>
    </div>
  );

  const cartItemsList = (
    <ul className="cart-items max-h-[70vh] w-full max-w-4xl bg-white flex flex-col gap-2 overflow-y-auto items-center p-4 rounded mt-8">
      {cartItems.map((item, index) => (
        <li key={index} className="cart-item flex items-center border border-black w-full mt-10 p-4 rounded">
          <img className='w-20 h-30 rounded' src={item.img} alt={item.name} />
          <div className="flex-1 flex items-center justify-between ml-4">
            <p className="text-lg">{item.name}</p>
            <p className='text-green-700 text-lg'>Rs.{item.price}</p>
            <button onClick={() => removeFromCart(item)} className='text-red-600'>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="cart-container h-screen w-full flex flex-col items-center justify-between bg-gray-300 relative p-4">
      {cartItems.length > 0 ? cartItemsList : emptyCartMessage}
      <div className="total h-16 w-full bg-zinc-900 flex justify-center items-center text-white text-lg">
        <div>Total: Rs.{totalPrice}</div>
      </div>
      {cartItems.length > 0 && (
        <Link
          to={{
            pathname: '/checkout',
            state: { cartItems, totalPrice } // Pass cartItems and totalPrice to CheckoutPage
          }}
        >
          <button className="mt-4 px-6 py-2 bg-zinc-900 text-white font-semibold rounded hover:bg-green-700">
            Proceed to Checkout
          </button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
