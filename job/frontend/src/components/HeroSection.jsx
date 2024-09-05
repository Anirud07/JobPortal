import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HeroSection.css'; // Importing CSS for the animation

// Custom arrow components
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-[50%] right-[-30px] transform -translate-y-[50%] cursor-pointer z-10 text-4xl text-gray-600 hover:text-gray-800"
            onClick={onClick}
        >
            &#10095;
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-[50%] left-[-30px] transform -translate-y-[50%] cursor-pointer z-10 text-4xl text-gray-600 hover:text-gray-800"
            onClick={onClick}
        >
            &#10094;
        </div>
    );
};

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    // Carousel settings with custom arrows
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        accessibility: true,
    };

    // Image sources for the horizontal scroll
    const scrollImages = [
        "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/66bc577aa0411_Unstop_homepage_banner_TIC_-_register_now__1_.png?d=1190x465",
        "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/66a8e6590d2da_Rotating__1_.jpg?d=1190x465",
        "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/66b3a0bd6bc08_Homepage__2___1_.jpg?d=1190x465",
        "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/66aa04317d433_lime_landing_page-4__1___1_.png?d=1190x465",
         "https://d8it4huxumps7.cloudfront.net/images/home-page-banner/66b3a0bd6bc08_Homepage__2___1_.jpg?d=1190x465"
    ];

    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-orange-600 font-medium'>UNLOCK YOUR CAREER WITH CAREER HIVE</span>
                <h1 className='text-4xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                
                {/* Image Carousel */}
                <Slider {...settings} className="w-full sm:w-[70%] lg:w-[50%] mx-auto relative">
                    {scrollImages.map((src, index) => (
                        <div key={index} className="group">
                            <div className="h-[250px] lg:h-[300px] overflow-hidden rounded-lg">
                                <img 
                                    src={src} 
                                    alt={`Career Image ${index + 1}`} 
                                    className='w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105'
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
                
               

                {/* Infinite Scrolling Images */}
                <div className='scrolling-images-container'>
                    <div className='scrolling-images'>
                        {/* Duplicating the images for seamless scroll */}
                        {scrollImages.concat(scrollImages).map((src, index) => (
                            <img 
                                key={index} 
                                src={src} 
                                alt={`Scrolling Image ${index + 1}`} 
                                className='scrolling-image'
                            />
                        ))}
                    </div>
                </div>
                <div className='flex w-[90%] md:w-[50%] lg:w-[40%] shadow-lg border border-black pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none rounded-lg w-full dark:bg-transparent'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
