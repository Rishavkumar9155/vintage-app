import React from 'react'
import { Link } from 'react-router-dom'

const Sidenavbar = () => {
  return (
    <div>

    <div className="container border-4 h-screen w-[30vh] flex flex-col  ">
        <div className="maindiv mt-[10vh] flex flex-col justify-evenly h-screen">
    <Link to="/Order">  <div className="order  w-[28vh] border-3  h-7 flex items-center justify-center  bg-gr font-['futura']">Order</div></Link> 
    <Link to="/AddProduct" >   <div className="AddProduct  w-[28vh] border-3  h-7 flex items-center justify-center font-['futura'] bg-gray- ">AddProduct</div></Link>
      <Link to="/Admin"> <div className="Admin  w-[28vh] border-3  h-7 flex items-center justify-center font-['futura'] bg-gray- ">Admin</div></Link> 




        </div>
    </div>




    </div>
  )
}

export default Sidenavbar