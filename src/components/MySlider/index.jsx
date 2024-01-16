import React, { useState } from 'react';

import Slider from "react-slick";
import NextArrow from '../NextArrow';
import PrevArrow from '../PrevArrow';
import { fashionData } from '../../data';

const MySlider = ({children,...data}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesToShow = 5;
    const {title, titleBtn} = data;

    const settings = {
        arrows: true,
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow disabled={currentSlide === fashionData.length - slidesToShow}/>,
        prevArrow: <PrevArrow disabled={currentSlide === 0}/>,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    return (
        <div>
            <div className={`px-8 flex gap-4 items-center ${titleBtn && "mb-8"}`}>
                <p className='font-bold text-[20px]'>{title}</p>
                {titleBtn && <button className='text-[14px] bg-red-200 px-5 py-2 rounded-[5px]'>{titleBtn}</button>}
            </div>
            <div className='relative mt-4'>
            <Slider {...settings}>
                {children}
            </Slider>
            </div>
        </div>
    );
};

export default MySlider;