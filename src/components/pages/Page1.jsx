import React from 'react';

const Page1 = () => {
  return (
    <div className="mainly flex justify-center items-center h-screen overflow-hidden">
      <div
        className="w-screen h-screen absolute top-0 left-0 bg-top bg-cover mt-6"
        style={{
          backgroundImage: `url('https://static.zara.net/photos///contents/mkt/spots/ss24-north-man-bags/subhome-xmedia-30//w/3728/image-landscape-fill-6a7a53d3-3f51-4482-b745-1231a1fcb4b9-default_0.jpg?ts=1721821700992')`,
        }}
      >
        <div className=" divfirst w-full h-full flex justify-center items-center">
          <h1 className="hh1 text-8xl  text-white font-'Higher_Jump' text-center font-['serif']">
            Vintage Clothings
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page1;
