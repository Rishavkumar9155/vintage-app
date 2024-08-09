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
    tl.to(".img", {
      backgroundSize: "100%"
    }, "a");

    tl.to(".svg2", {
      maskSize: "300%"
    }, "b");
    tl.to(".img5", {
      backgroundSize: "100%"
    }, "b");

  }, { scope: ref });

  return (
    <div ref={ref}>
      <div id="main" className="h-[60vh] w-[100%] bg-black bg-center bg-cover bg-[url('https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt86c4a61e8693bd03/667e9403608abb621c6b4f27/LANDING_NN.jpg?imdensity=1&im=RegionOfInterestCrop,width=1920,height=823,regionOfInterest=(1024,439)')] relative">
        <div className="main-div overflow-hidden top-[90%] flex ">
          <h1 className='text-[60vh] text-white font-extralight absolute font-["farfetchbasis"] top-[10%]'> Mens </h1>
          <Link to="/Mens" className='top-[80%] right-[5%] absolute z-10'>
            <button className='w-[18vh] h-[5vh] border-2 rounded-md border-black  text-black bg-transparent hover:bg-black hover:text-white transition-colors duration-600'>
              visit
            </button>
          </Link>
        </div>
        <div className="svg">
          <div className="h-screen relative bg-cover w-full  bg-[url('https://shop.mango.com/assets/rcs/pics/static/T7/fotos_alt/S6/77060584_08_01_O2.jpg?ts=1717761861000&im=SmartCrop,width=2048,height=1431&imdensity=1')]">
            <h1 className=' text-[60vh] text-white font-extralight absolute font-["farfetchbasis"] top-[10%]'>TONAL </h1>
            <div className="svg2 relative">
              <div className="img5">  <h1 className=' text-[60vh] text-white font-extralight absolute font-["farfetchbasis"] top-[10%]'>COSMOPOLITAN </h1></div>
            </div>
          </div>
        </div>
      </div>

      <div className="responsivemen mt-10 h-screen w-full flex   flex-col items-center justify-center bg-red-400 bg-cover bg-top bg-[url('https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/bltb02ec6f6e77469d6/66952d28053818257f62c742/Sale_Step2_Man_4096x1756.jpg?imdensity=1&im=RegionOfInterestCrop,width=960,height=1344,regionOfInterest=(2048,878)')]">
        
<h1 className='font-["futura"] text-[14vh] text-white font-light '> SALE</h1>
<h1 className='font-[""] text-[8vh] text-white font-light '> UP TO 50% OFF</h1>
<Link to="/Mens"><button className='h-[8vh] w-[26vh] bg-white '>Shop now</button></Link>




</div>
    </div>
  )
}

export default Page1;
