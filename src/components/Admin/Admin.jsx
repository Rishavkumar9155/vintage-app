import React from 'react'
import Sidenavbar from './Sidenavbar'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Order from "../pages/Order"

const Admin = () => {
  return (
    <div className='flex'>
<Sidenavbar/>
<div className="div h-screen w-full "></div>
    </div>
  )
}

export default Admin