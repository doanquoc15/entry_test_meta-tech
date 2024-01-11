import React from 'react';

const Banner = () => {
    return (
        <div className="w-full h-[600px] bg-cover bg-[url('https://c.wallhere.com/photos/c4/38/1502x845_px_After_School_K_pop_Nana_Orange_Caramel-635535.jpg!d')] overflow-hidden">
            <div className="absolute top-1/2 right-[200px] text-right">
                <p className='text-[70px] tracking-[4px] font-[Lora]'>It's <span className='text-pink-400'>Spring</span> Again</p>
                <p>This new drop is so good you'll want one of everything</p>
                <button className='bg-white rounded-[4px] px-3 py-1 mt-20'>shop sale</button>
            </div>
        </div>
    );
};

export default Banner;