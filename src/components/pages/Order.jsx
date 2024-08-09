import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Importing useCart instead of CartContext
import thanks from "../../assets/Thanks.mp4"
import Sidenavbar from '../Admin/Sidenavbar';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Using useCart hook

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const emptyCartMessage = (
    <div className="empty-cart h-screen w-full flex justify-center relative overflow-hidden font-mono">
      <video className='h-full w-full object-cover' autoPlay muted loop src={thanks}/>
      <Link to="/" className='h-10 w-10  absolute top-[90%] left-[40%]'>  <button className="h1 text-[3vh]  backdrop-blur-sm bg-white/30 text-black font-mono h-[6vh] w-[40vh] rounded ">Continue shopping</button></Link>
    </div>
  );

  const cartItemsList = (
    <ul className="cart-items h-[80vh] w-[95%]  bg-white flex gap-2 flex-col overflow-scroll items-center justify-center rounded mt-20 " >
      {cartItems.map((item, index) => (
        <li key={index} className="cart-item flex items-center border-2w-full h-[25vh] justify-around p-5 border-2 border-black">
          <img className='image w-[9%] rounded' src={item.img} alt={item.name} />

          <div className="divcart flex items-center  h-[10vh] w-full justify-around">
          <p>{item.name}</p>
          <p className='text-green-700'>Rs.{item.price}</p>
          <button onClick={() => removeFromCart(item)} className='text-red-600'>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );
  
  return (
    <div className='flex'>
      <Sidenavbar/>
    <div className="cart-container h-screen w-full flex flex-col items-center justify-center bg-gray-300 relative">
      { cartItemsList }
      <div className="div h-[10vh] w-full bg-blue-700 flex justify-center items-center pt-7 pr-2 text-white flex-col "> <div className="div">Total: Rs.{totalPrice}</div>
      {/* <div className="div">total items</div> */}
      </div>
    
      
    </div>
    </div>
  );
};

export default Cart;
