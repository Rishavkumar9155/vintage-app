import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import gsap from "gsap";




const Mens = () => {
  
  // useEffect(() => {
  //   const tl = gsap.timeline();
  //   tl.from("video", {
  //     transform: "scaleX(0.8) scaleY(0.7) ",
  //     duration: 5,
  //   });
  // }, []);
 
  return (
    
    
    <div className='Mens font-light font-["HURTMOLD"]'>
     
      
   <Link to="/Master1
   "> <div className="divx pt-20 relative h-[90vh] w-full bg-cover bg-top bg-[url('https://static.zara.net/assets/public/ec2f/135c/3fbf422bac78/0bc24e0bfb4e/T9000000175-ult/T9000000175-ult.jpg?ts=1721313447347&w=3234')]"data-scroll data-scroll-speed="-0.6">
      
        <h1 className='texty text-[4.9vw]  text-white absolute top-1/2 left-[33%] translate-x-[-30%] translate-y-[-50%] font-light'   >
          MASTERING THE OCASSION <br /> <span className='discover text-[4vh] translate-x-[-10%] translate-y-[-50%] absolute top-[100%] left-[40%]'>Discover more</span>
        </h1>
        
      </div></Link>  

     
      <Link to="/Master2"> <div className="divy pt-2 relative">
     <img
          className='w-full h-full object-cover'
          src='https://shop.mango.com/cms-assets/v3/assets/blt351b9b24ac05a648/blt507381649f16d1d3/669e3d5d24bd25078fec639f/LANDING_Dsunset.jpg?imdensity=1&im=RegionOfInterestCrop,width=2048,height=878,regionOfInterest=(1024,439)'
          alt="Linen Collection"
        /> 
        <h1 className='text-[5.5vw] font-[""] text-white absolute top-1/2 left-[25%] translate-x-[-15%] translate-y-[-50%] font-light'  >
          COSMOPOLITION SHADES <br />
          <span className='discover text-[4vh] translate-x-[-10%] translate-y-[-50%] absolute top-[100%] left-[40%]'>Discover more</span>
        </h1>
        
      </div></Link>
     <div className="container2 h-[80vh] w-full overflow-hidden flex justify-center items-center gap-1">
     <Link to="/Suit" className='blazers h-[78vh] w-[33.33%]  overflow-hidden'>  <div className="div1 relative w-[] h-[78vh]  bg-top bg-cover  bg-[url('https://st.mngbcn.com/rcs/pics/static/T7/fotos_alt/S/77010587_09_01.jpg?ts=1717149797000&vsvts=1717083479893&imwidth=608&imdensity=2')] transition ease-in-out delay-400 hover:scale-90 " >
        <h1 className='top-[50%] left-[10%] absolute text-[7vh] text-white'>Suits</h1>
         <h1 className='top-[60%] left-[10%] absolute text-[2vh] border-b-2 text-white'>Explore more</h1>

        </div> </Link> 
        <Link className='blazers h-[78vh] w-[33.33%]  overflow-hidden' to="/Linenshirt">   <div className="div1 relative w-[] h-[78vh] transition ease-in-out delay-400 hover:scale-90 bg-top bg-cover bg-red-400 bg-[url('https://staticpages.mngbcn.com/visual/localhost/images/2024/04/he_landings_americanas_1204.jpg?imwidth=503&imdensity=2&impolicy=set_13')]" >
         <h1 className='top-[50%] left-[10%] absolute text-[7vh] text-white'>Blazer</h1>
         <h1 className='top-[60%] left-[10%] absolute text-[2vh] border-b-2 text-white'>Explore more</h1>

        </div></Link> 


   <Link   className='blazers h-[78vh] w-[33.33%]  overflow-hidden' to="/Tshirt">  
    <div className="div1 relative w-[] h-[78vh] transition ease-in-out delay-400 hover:scale-90 bg-top bg-cover  bg-[url('https://staticpages.mngbcn.com/visual/localhost/images/2024/05/LANDING_polos.jpg?imwidth=503&imdensity=2&impolicy=set_13')]" >
         <h1 className='top-[50%] left-[10%] absolute text-[7vh] text-white'>Tshirts</h1>
         <h1 className='top-[60%] left-[10%] absolute text-[2vh] border-b-2 text-white'>Explore more</h1>

        </div>
        </Link>  



        
      </div>

 <div className="container2 h-[80vh] w-full overflow-hidden flex justify-center items-center gap-1">
   <Link to="/Jacket1" className='blazers h-[78vh] w-[33.33%]  overflow-hidden' >     <div className="div1 relative  h-[78vh]  bg-top bg-cover  bg-[url('https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67010623_99.jpg?imwidth=1350&imdensity=1&ts=1700148904124')] transition ease-in-out delay-400 hover:scale-90 " >
        <h1 className='top-[50%] left-[10%] absolute text-[7vh] text-white'>Jackets</h1>
         <h1 className='top-[60%] left-[10%] absolute text-[2vh] border-b-2 text-white'>Explore more</h1>
         
        </div>
        </Link>

        <Link   className='blazers h-[78vh] w-[33.33%]  overflow-hidden' to="/Shoes1">  
        <div className="div1 relative  h-[78vh] transition ease-in-out delay-400 hover:scale-90 bg-bottom bg-cover  bg-[url('https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67094437_01_B.jpg?ts=1700492583220&im=SmartCrop,width=1024,height=1434&imdensity=1')]" >
         <h1 className='top-[50%] left-[10%] absolute text-[7vh] text-white'>Shoes</h1>
         <h1 className='top-[60%] left-[10%] absolute text-[2vh] border-b-2 text-white'>Explore more</h1>

        </div>
</Link>
<Link  to ="/Bags1" className='blazers h-[78vh] w-[33.33%]  overflow-hidden' >  
        <div className="div1 relative  h-[78vh] transition ease-in-out delay-400 hover:scale-90 bg-top bg-cover bg-red-400 bg-[url('https://static.zara.net/assets/public/0e8a/08fb/929241379461/2408257eb43b/13219320032-031-p/13219320032-031-p.jpg?ts=1711110635421&w=450')]" >
         <h1 className='top-[50%] left-[10%] absolute text-[7vh] text-white'>Bags</h1>
         <h1 className='top-[60%] left-[10%] absolute text-[2vh] border-b-2 text-white'>Explore more</h1>

        </div>
        
</Link>



        
      </div>
      

      
    </div>
  );
};

export default Mens;
