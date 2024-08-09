import React, { useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
import { Link } from 'react-router-dom';

const Page1 = () => {

  const ref = useRef();
  useGSAP(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "50% 50%",
        end: "250% 50%",
        scrub: 2,
        pin: true,
      }
    })
    tl.to(".svg", {
      maskSize: "300%"
    }, "a");
    tl.to(".img9", {
      backgroundSize: "100%"
    }, "a");

    tl.to(".svg2", {
      maskSize: "300%"
    }, "b");
    tl.to(".img7", {
      backgroundSize: "100%"
    }, "b");

  }, { scope: ref });

  return (
    <div ref={ref}>
      <div id="main" className="h-[60vh] mt-5 w-[100%] bg-black bg-center bg-cover bg-[url('https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt935206b69e1c7147/6694fd75f5ef5f1aaaa734ae/LANDING_NN_(3).jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(1024,439)')] relative">
        <div className="main-div overflow-hidden top-[90%] flex ">
          <h1 className='text-[50vh] text-white font-extralight absolute font-["farfetchbasis"] top-[30%]'>Womens </h1>
          <Link to="/Womens" className='top-[80%] right-[5%] absolute z-10'>
            <button className='w-[18vh] h-[5vh] border-2 rounded-md border-white text-white bg-transparent hover:bg-black hover:text-white transition-colors duration-600'>
              visit
            </button>
          </Link>
        </div>
        <div className="svg">
          <div className="h-screen relative bg -center bg-cover w-full bg-red-400 bg-[url('https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt6648012ebf9e94c0/668fb64a1c5f77c3c0c6f5da/LANDING_LINO_(1).jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(1228.8,0)')]">
            <h1 className=' text-[45vh] text-white font-extralight absolute font-["farfetchbasis"] top-[10%]'>VINTAGE </h1>
            <div className="svg2 relative">
              <div className="img7 bg-cover mt-6">  <h1 className=' text-[40vh] text-white font-extralight absolute font-["farfetchbasis"] top-[10%]'>TRENDING</h1></div>
            </div>
          </div>
        </div>
      </div>
      <div className="responsivemen mt-10 h-screen w-full flex   flex-col items-center justify-center bg-red-400 bg-cover bg-top bg-[url('https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt8ee924b31af63442/668fb64a1c0100180a6811ba/LANDING_FIESTA_Y_EVENTOS.jpg?imdensity=1&im=RegionOfInterestCrop,width=960,height=600,regionOfInterest=(1024,482.90000000000003)')]">
        
        <h1 className='font-[""] text-[14vh] text-black font-light '> PARTY</h1>
        <Link to="/Womens"><button className='h-[8vh] w-[26vh] bg-white '>Shop now</button></Link>
        
        
        
        
        </div>
    </div>
  )
}

export default Page1;
