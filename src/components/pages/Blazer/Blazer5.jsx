import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { FaHeart } from "react-icons/fa";
import { CiTimer } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoShirtOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Shirt = () => {
  const { addToCart } = useCart();

  const shirtItem = {
    name: 'Super slim-fit suit jacket in stretch fabric',
    price: 7790,
    img: "https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67020633_30_D1.jpg?ts=1701361991588&imwidth=480&imdensity=2"
  };

  const handleAddToCart = () => {
    addToCart(shirtItem);
  };
  const Login=()=>{

    alert("Added to cart ,thanks for shopping ");
  }

  return (
    <div className="shirt-container  flex  h-[100%] w-[100%] items-start justify-center">
        {/* <img className="w-7" src={shirtItem.img} alt="Shirt Image" />
      <h2>{shirtItem.name}</h2>
      <p>Price: ${shirtItem.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Link to="/Cart">View Cart</Link> */}
      {/* <img className="w-7" src={shirtItem.img} alt="Shirt Image" /> */}
<div className="maincontainer h-[262vh] overflow-hidden w-[65%]  ">
  <div className="divxx flex justify-center items-center gap-1 pt-[10vh]">
<div className="img1  w-[50%] h-[100vh]   bg-cover  bg-[url('https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67020633_30.jpg?ts=1701358391588&imwidth=500&imdensity=2')]"></div>
<div className="img2 w-[50%] h-[100vh]  bg-cover  bg-[url('https://st.mngbcn.com/rcs/pics/static/T6/fotos/outfit/S20/67020633_30-99999999_01.jpg?ts=1701358391588&imwidth=500&imdensity=2')]"></div>
</div>


<div className="divxx  flex justify-center items-center gap-1 pt-1">
<div className="img1  w-[50%] h-[100vh]   bg-cover  bg-[url('https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67020633_30_R.jpg?ts=1701358391588&imwidth=500&imdensity=2')]"></div>
<div className="img2 w-[50%] h-[100vh]  bg-cover  bg-[url('https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67020633_30_D1.jpg?ts=1701358391588&imwidth=500&imdensity=2')]"></div>
</div>




<div className="divxxy  flex justify-center items-center gap-1 pt-1">
<div className="imgx  w-[33.33%] h-[50vh]  bg-center bg-cover  bg-[url('https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67020633_30_D4.jpg?ts=1701358391588&imwidth=500&imdensity=2')]"></div>
<div className="imgx w-[33.33%] h-[50vh]  bg-center bg-cover  bg-[url('https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67020633_30_D8.jpg?ts=1699452237346&imwidth=331&imdensity=2')]"></div>
<div className="imgx  w-[33.33%] h-[50vh]  bg-center  bg-cover  bg-[url('https://st.mngbcn.com/rcs/pics/static/T6/fotos/S20/67020633_30_B.jpg?ts=1699452237346&imwidth=331&imdensity=2')]"></div>



</div>
















</div>
<div className="box1x h-[110vh] w-[30%]  flex pt-[10vh]  items-center justify-start font-thin font-sans ml-5 flex-col overflow-hidden">
  <div className="divn h-[18vh] w-full flex flex-col  pl-2">
    <div className="text1 text-[4vh] ">{shirtItem.name}</div>
    <div className="text2 text-[3vh] text-gray-700">Rs. {shirtItem.price} <br /> <span className='text-[1.8vh] font-mono' >REF. 67076725-AMALFI-LH</span></div>




  </div>

  <div className="divn h-[8vh] w-full  flex items-center  justify-around ">
    <div className="divn flex gap-1 ">
      <h1 className='h-5 w-5 bg-black transition-all hover:scale-[1.2] '></h1>
      <h1 className='h-5 w-5 bg-yellow-700  transition-all hover:scale-[1.2]'></h1>
      <h1 className='h-5 w-5 bg-blue-900  transition-all hover:scale-[1.2]'></h1>
    </div>
    <h1 className='text-[2vh] text-black-400'>Medium Brown</h1>




  </div>

  <div className="description  h-[25vh] w-full flex flex-col items-start justify-center gap-2 b">
<h1 className='text-[2.5vh] text-black-400 '>Description</h1>
<h2 className='text-[1.5vh]'>

Tailoring collection. Super slim fit. Comfort Stretch: Stretch fabric for added comfort. Fabric made of recycled polyester, a durable, breathable, easy-care fibre that provides comfort in use. Lapel with notch. Two buttons closing on the front. Welt pocket on the chest. Two pockets with flaps on the front. Long buttoned sleeve. Short-length jacket . Double back slit. Inner lining. Inner pockets. The model is 185 cm tall and is wearing a size 50.</h2>



  </div>



<div className="select  font-sans  flex items-center justify-center flex-col">
  <h1 className='text-black-400  mb-4'>Select Size</h1>
  <select name="" id="cars" className='select w-[60vh]  border-2 border-black border-l-0  border-r-0 '>
  <option value="S " className=''>S</option>
<option value="M " className=''>M</option>
<option value="L">L</option>
<option value="XL">XL</option>
<option value="XXL">XXL</option>
</select>

</div>

<div className="divn h-[10vh] w-full mt-[2vh] flex items-center justify-center gap-2">

  <button className='w-[50vh] h-[5vh] bg-black text-white  text-[2vh] font-["futura"]  hover:bg-gray-400' onClick={handleAddToCart}   > <h1 onClick={Login}>Add to cart</h1> </button>
  <Link to="/Cart"> <button className='w-[8vh] h-[5vh] bg-black text-white  text-[2vh] font-["futura"] flex items-center justify-center hover:bg-gray-400'>  <FaShoppingCart  className='text-[2.5vh]'/></button></Link>
  <button></button>






</div>

<div className="div h-[8vh] w-full  flex justify-around">
  <div className="box1 flex items-center justify-center gap-2"><CiTimer className='text-[2vh]' /> Delivery & returns </div>
  <div className="box1 flex items-center justify-center gap-2"><CiLocationOn className='text-[2vh]' /> Store availability </div>
  

  


</div>

<div className="div h-[8vh] w-full  flex justify-around items-center">
  <div className="box1 flex items-center justify-center gap-2 ml-[-4vh]"><IoShirtOutline className='text-[2vh] mr' />  Product details     </div>
  <div className="box1 flex items-center justify-center gap-2 ml-[-8vh]"><CiHeart className='text-[2vh]' /> Wishlist </div>
  

  


</div>

</div>
      
    </div>
  );
};

export default Shirt;
