import React from 'react';
import banner from '../../images/banner.png';

const Banner = () => {
    return (
        <div className="w-full h-[500px] bg-cover bg-[url('https://static9.depositphotos.com/1561500/1189/i/450/depositphotos_11899650-Sexy-woman-from-back-legs-high-heel-shoes-white-background.jpg')] overflow-hidden">
            <div className="absolute top-1/2">
                <p>It's <span>Spring</span> Again</p>
                <p>This new drop is so good you'll want one of everything</p>
            </div>
        </div>
    );
};

export default Banner;