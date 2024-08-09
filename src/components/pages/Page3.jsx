import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
    { id: 1, name: 'Blazer',  image: 'https://shop.mango.com/assets/rcs/pics/static/T5/fotos/outfit/S/57028266_56-99999999_01.jpg?ts=1696926774943&im=SmartCrop,width=960,height=1344&imdensity=1)', link: './Linenshirt' },
    { id: 2, name: 'Tshirt', image: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77070586_78_D3.jpg?ts=1720690455953&im=SmartCrop,width=1024,height=1434&imdensity=1', link: './Tshirt' },
    { id: 3, name: 'JumpSuits', image: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/outfit/S/77092922_PL-99999999_01.jpg?ts=1721205455560&im=SmartCrop,width=1024,height=1434&imdensity=1', link: './Womens6' },
    { id: 4, name: 'Vacation', image: 'https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77022010_28.jpg?imwidth=640&imdensity=1&ts=1720791507536', link: './Womens2' },
    { id: 5, name: 'Shoes', image: 'https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67094437_01.jpg?imwidth=721&imdensity=1&ts=1700492583220', link: './Shoes1' }
];

const App = () => {
    const [autoplay, setAutoplay] = useState(false);
    const sliderRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAutoplay(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: autoplay,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        arrows: true,
        ref: sliderRef,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="mainslider  bg-black p-[10vh] h-[90vh] w-full relative z-10 overflow-hidden">
            <div className="relative">
                <h1 className="font-['MangoSans'] text-white text-5xl font-extralight mb-4">NEW ITEMS</h1>
                <Slider {...settings}>
                    {products.map((product) => (
                        <div key={product.id} className="relative p-2 ">
                            <a href={product.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div className="relative ">
                                    <img src={product.image} alt={product.name} className="w-full h-auto transition ease-in-out delay-400 hover:scale-90  " />
                                    <div className="absolute  top-[50%] left-[10%]">
                                        <h3 className="text-white text-[8vh] bg-opacity-50 font-['MangoSans'] font-light ">{product.name}</h3>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default App;
