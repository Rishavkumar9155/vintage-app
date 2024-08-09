import React, { useEffect,useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import locomotiveScroll from 'locomotive-scroll';
import Page1 from './components/pages/Page1';
import Page2 from './components/pages/Page2';
import Page3 from './components/pages/Page3';

import Contact from './components/Contact';
import About from './components/About';
import Marque from './components/pages/Marque';
import Footer from './components/pages/Footer';
import Login from './components/pages/Login';
import Mens from './components/pages/Mens';
import Womens from './components/pages/Womens';
import Shirt from './components/pages/Shirt';
import Tshirt from './components/Linenshirt/Tshirt';
import Cart from './components/pages/Cart';
import { CartProvider } from './components/pages/CartContext.jsx';

import Linenshirt from './components/Linenshirt/Linenshirt';
import Blazer2 from "./components/pages/Blazer/Blazer2"
import Blazer3 from "./components/pages/Blazer/Blazer3"
import Blazer4 from "./components/pages/Blazer/Blazer4"
import Blazer5 from "./components/pages/Blazer/Blazer5"
import Blazer6 from "./components/pages/Blazer/Blazer6"
import Blazer7 from "./components/pages/Blazer/Blazer7"
import Blazer8 from "./components/pages/Blazer/Blazer8"
import Tshirt1 from "./components/pages/Tshirt/Tshirt1"
import Tshirt2 from "./components/pages/Tshirt/Tshirt2"
import Tshirt3 from "./components/pages/Tshirt/Tshirt3"
import Tshirt4 from "./components/pages/Tshirt/Tshirt4"
import Tshirt5 from "./components/pages/Tshirt/Tshirt5"
import Tshirt6 from "./components/pages/Tshirt/Tshirt6"
import Tshirt7 from "./components/pages/Tshirt/Tshirt7"
import Tshirt8 from "./components/pages/Tshirt/Tshirt8"
import Suit from './components/Linenshirt/Suit';
import Suit1 from "./components/pages/Suits/Suit1"
import Suit2 from "./components/pages/Suits/Suit2"
import Suit3 from "./components/pages/Suits/Suit3"
import Suit4 from "./components/pages/Suits/Suit4"
import Suit5 from "./components/pages/Suits/Suit5"
import Suit6 from "./components/pages/Suits/Suit6"
import Suit7 from "./components/pages/Suits/Suit7"
import Suit8 from "./components/pages/Suits/Suit8"

import Jacket1 from "./components/pages/Jacket/Jacket1"
import Shoes1 from "./components/pages/Shoes/Shoes1"
import Bags1 from "./components/pages/Bags/Bags1"
import Signup from "./components/Signup"
import Admin from './components/Admin/Admin.jsx';
import Sidenavbar from './components/Admin/Sidenavbar.jsx';
import Order from './components/pages/Order.jsx';
import AddProduct from "./components/Admin/AddProduct.jsx"
import Newitem from './components/Admin/Newitem.jsx';
import Page4 from "./components/pages/Page4.jsx"
import Page5 from "./components/pages/Page5.jsx"
import Womens1 from "./components/pages/Womens/Womens1.jsx"

import Womens2 from "./components/pages/Womens/Womens2.jsx"
import Womens3 from "./components/pages/Womens/Womens3.jsx"

import Womens4 from "./components/pages/Womens/Womens4.jsx"
import Womens5 from "./components/pages/Womens/Womens5.jsx"
import Womens6 from "./components/pages/Womens/Womens6.jsx"
import Womens7 from "./components/pages/Womens/Womens7.jsx"
import Womens8 from "./components/pages/Womens/Womens8.jsx"
import Master1 from "./components/pages/Womens/Mastering1.jsx"
import Master2 from "./components/pages/Womens/Mastering2.jsx"
import Checkout from"./components/pages/Checkout.jsx"













function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp:0.04
      // Add any other options as needed
    });

    // Clean up when component unmounts
    return () => {
      
    };
  }, );

  return (
    <div ref={scrollRef} className="App ">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar className="navmain" />
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
            
               
             
                <Footer />
              </>
            )}
          />
          <Route path="/Contact" element={<><Contact /><Marque /></>} />
          <Route path="/About" element={<><About /><Marque /></>} />
          <Route path="/Login" element={<><Login /></>} />
          <Route path="/Mens" element={<><Mens /><Footer /></>} />
         
          <Route path="/Womens" element={<><Womens /><Footer /></>} />
          <Route path="/Shirt" element={<><Shirt /><Footer /></>} />
         
          
          
          <Route path="/cart" element={<Cart />} />
          <Route path="/Linenshirt" element={<><Linenshirt /><Footer /></>} />
          <Route path="/Blazer2" element={<><Blazer2 /><Footer /></>} />
          <Route path="/Blazer3" element={<><Blazer3 /><Footer /></>} />
          <Route path="/Blazer4" element={<><Blazer4 /><Footer /></>} />
          <Route path="/Blazer5" element={<><Blazer5 /><Footer /></>} />
          <Route path="/Blazer6" element={<><Blazer6 /><Footer /></>} />
          <Route path="/Blazer7" element={<><Blazer7 /><Footer /></>} />
          <Route path="/Blazer8" element={<><Blazer8 /><Footer /></>} />
          <Route path="/Tshirt" element={<><Tshirt /> <Footer /></>} />
          <Route path="/Tshirt1" element={<><Tshirt1 /><Footer /></>} />
          <Route path="/Tshirt2" element={<><Tshirt2 /><Footer /></>} />
          <Route path="/Tshirt3" element={<><Tshirt3 /><Footer /></>} />
          <Route path="/Tshirt4" element={<><Tshirt4 /><Footer /></>} />
          <Route path="/Tshirt5" element={<><Tshirt5 /><Footer /></>} />
          <Route path="/Tshirt6" element={<><Tshirt6 /><Footer /></>} />
          <Route path="/Tshirt7" element={<><Tshirt7 /><Footer /></>} />
          <Route path="/Tshirt8" element={<><Tshirt8 /><Footer /></>} />
          <Route path="Suit" element={<><Suit /><Footer /></>} />
          <Route path="Suit1" element={<><Suit1 /><Footer /></>} />
          <Route path="Suit2" element={<><Suit2 /><Footer /></>} />
          <Route path="Suit3" element={<><Suit3 /><Footer /></>} />
          <Route path="Suit4" element={<><Suit4 /><Footer /></>} />
          <Route path="Suit5" element={<><Suit5 /><Footer /></>} />
          <Route path="Suit6" element={<><Suit6 /><Footer /></>} />
          <Route path="Suit7" element={<><Suit7 /><Footer /></>} />
          <Route path="Suit8" element={<><Suit8 /><Footer /></>} />
         
          <Route path="Jacket1" element={<><Jacket1/><Footer /></>} />
          <Route path="Shoes1" element={<><Shoes1/><Footer /></>} />
          <Route path="Bags1" element={<><Bags1/><Footer /></>} />
          <Route path="/Signup" element ={<><Signup></Signup><Footer /></>}/>
          <Route path="/Admin" element ={<><Admin/></>}/>
          <Route path="/Sidenavbar" element ={<><Sidenavbar/></>}/>
          <Route path="/Order" element ={<><Order/></>}/>
          <Route path="/AddProduct" element ={<><AddProduct/></>}/>
          <Route path="/Newitem" element ={<><Newitem/></>}/>
          <Route path="/Page5" element ={<><Page5/></>}/>
          <Route path="/Womens1" element ={<><Womens1/><Footer /></>}/>
          <Route path="/Womens2" element ={<><Womens2/><Footer /></>}/>
          <Route path="/Womens3" element ={<><Womens3/><Footer /></>}/>
          <Route path="/Womens4" element ={<><Womens4/><Footer /></>}/>
          <Route path="/Womens5" element ={<><Womens5/><Footer /></>}/>
          <Route path="/Womens6" element ={<><Womens6/><Footer /></>}/>
          <Route path="/Womens7" element ={<><Womens7/><Footer /></>}/>
          <Route path="/Womens8" element ={<><Womens8/><Footer /></>}/>
          <Route path="/Master1" element ={<><Master1/><Footer /></>}/>
          <Route path="/Master2" element ={<><Master2/><Footer /></>}/>
          <Route path="/Checkout" element ={<><Checkout/><Footer /></>}/>
          
          
          
          
          
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
