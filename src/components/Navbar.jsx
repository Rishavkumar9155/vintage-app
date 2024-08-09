import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoMailSharp } from "react-icons/io5";
import gsap from "gsap";
import images from "../assets/womensbw.jpeg.jpg";

const Navbar = ({ size }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [hoverNavMain, setHoverNavMain] = useState(false);
  const [hoverNavFooter, setHoverNavFooter] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    gsap.to(".navrpage", {
      y: "-100%",
      duration: 1,
      ease: "power3.in",
      onComplete: () => setShowMenu(false),
    });
  };

  useEffect(() => {
    if (showMenu) {
      gsap.to(".navrpage", {
        y: 0,
        duration: 2,
        ease: "power3.out",
      });
      gsap.from(".navrpage .inputs, .navrpage .p-5, .navrmain", {
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5,
        stagger: 0.2,
      });
    }
  }, [showMenu]);

  const handleNavMainMouseEnter = () => {
    const tl = gsap.timeline();
    tl.from(".navx li", {
      y: 20,
      stagger: {
        amount: 0.6,
      },
      duration: 0.9,
      scale: 1,
    });
    setHoverNavMain(true);
  };

  const handleNavMainMouseLeave = () => {
    setHoverNavMain(false);
  };

  const handleNavFooterMouseEnter = () => {
    const ml = gsap.timeline();
    ml.to(".images", {
      y: 30,
      duration: 0.8,
      scale: 1.2,
    });
    setHoverNavFooter(true);
  };

  const handleNavFooterMouseLeave = () => {
    const ml = gsap.timeline();
    ml.to(".images", {
      duration: 0.8,
      scale: 0.9,
    });
    setHoverNavFooter(false);
  };

  return (
    <nav className="navmain flex justify-between w-full h-[9vh] bg-white fixed z-[99]">
      <div
        className="nav1 flex p-5 h-1 gap-5 font-['Futura_LT_Pro_Book'] text-[2.5vh]"
        onMouseEnter={handleNavMainMouseEnter}
        onMouseLeave={handleNavMainMouseLeave}
      >
        <div className="diverr flex items-center gap-5 justify-center p-4 text-[3vh] mt-2 font-extralight font-serif">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/Mens" onClick={closeMenu}>Mens</Link>
          <Link to="/Womens" onClick={closeMenu}>Womens</Link>
        </div>
      </div>
      <div className="nav2 flex">
        <h1 className='font-["futura"] text-[6vh] item-center'>VINTAGE</h1>
      </div>
      <div className="p-5 gap-5 flex items-center justify-center">
        <Link to="/Page5"><div className="search "><CiSearch /></div></Link>
    
        <Link to="/Login" className="userss"><CiUser /></Link>
        <Link to="/Cart" className="nav3"><FaOpencart className="relative text-[3.6vh]" /></Link>
        <div className="bar mr-9" onClick={toggleMenu}><HiBars3 /></div>
      </div>

      <div
        className="nav-footer overflow-hidden"
        style={{ height: (hoverNavMain || hoverNavFooter) ? "60vh" : "0" }}
        onMouseEnter={handleNavFooterMouseEnter}
        onMouseLeave={handleNavFooterMouseLeave}
      >
        <h1 className="navx h-[60vh] w-full flex items-center justify-center bg-[#edededff]">
          <div className="womens h-[60vh] w-[50%] flex items-center justify-between gap-[10vh] text-black text-[3.6vh]">
            <div className="lidiv flex flex-col ml-10 font-extralight font-['farfetchbasis']">
              <Link to="/Womens4">T-shirts</Link>
              <Link to="/Womens8">Sweater</Link>
              <Link to="/Womens3">Blazers</Link>
              <Link to="/Womens7">Boots</Link>
              <Link to="/Womens5">Jackets</Link>
              <Link to="/Womens6">Jumpsuits</Link>
            </div>
            <img className="images h-[60vh] w-[45vh]" src={images} />
          </div>
          <div className="mens h-[60vh] w-[50%] flex items-center justify-center gap-[15vh] text-black">
            <div className="lidiv flex flex-col ml-10 font-extralight font-['farfetchbasis'] text-[2.7vh]">
              <Link to="/Tshirt">T-shirts</Link>
              <Link to="/Linenshirt">Blazers</Link>
              <Link to="/Shoes1">Shoes</Link>
              <Link to="/Suit">Suits</Link>
              <Link to="/Bags1">Bags</Link>
              <Link to="/Jacket1">Jackets</Link>
            </div>
            <img className="images h-[60vh] w-[45vh]" src="https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77002541_05_D5.jpg?imwidth=960&imdensity=1&ts=1720690455953" />
          </div>
        </h1>
      </div>

      {showMenu && (
        <div className="navrpage absolute bg-black top-[8vh] left-0 h-screen flex flex-col items-start right-10 w-[90vh] mr-[100vh]">
          <div className="close-btn text-white flex text-[4vh] mt-5 mr-8 gap-5"  onClick={closeMenu}>
            <Link to="/Login"><CiUser /></Link>
          <Link to="/Cart"> <FaOpencart /></Link> 
            <Link to="/Page5">   <CiSearch  className="searches text-[3vh] flex items-center justify-center" /></Link>
            <div className='bg-white text-black rounded-full '><IoClose /></div>
            
          </div>
         
          <div className="p-5 flex flex-col gap-5 font-[Queenside] mr-8 text-white text-[3vh] relative it">
            <Link to="/Mens" onClick={closeMenu} className="text-[6vh]">
              Mens  
              <span className="text-[3vh]  p-2 list-none flex flex-col">
              <Link to="/Tshirt">T-shirts</Link>
              <Link to="/Linenshirt">Blazers</Link>
              <Link to="/Shoes1">Shoes</Link>
              <Link to="/Suit">Suits</Link>
              <Link to="/Bags1">Bags</Link>
              <Link to="/Jacket1">Jackets</Link>
              </span>
            </Link>
            <Link to="/Womens" onClick={closeMenu} className="text-[6vh] ">
              Womens <br />
              <span className="text-[2.7vh]  p-2 list-none flex flex-col">
              <Link to="/Womens4">T-shirts</Link>
              <Link to="/Womens8">Sweater</Link>
              <Link to="/Womens3">Blazers</Link>
              <Link to="/Womens7">Boots</Link>
              <Link to="/Womens5">Jackets</Link>
              <Link to="/Womens6">Jumpsuits</Link>
              </span>
            </Link>
          </div>
          <div className="navrmain flex flex-col items-center justify-center ml-[20%]">
            <div className="social font-sans font-thin text-xl flex items-center justify-center text-[26px] mt-6 text-white">
              Interact with us
            </div>
           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
