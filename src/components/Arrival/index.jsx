import React from 'react';

const Arrival = () => {
    return (
        <div className='w-full flex'>
            <div className='w-1/2 h-[550px] overflow-hidden relative'>
                <img className='object-cover' src="https://cf.shopee.vn/file/755df0277283902768411b916bb57e38" alt=""/>
                <div className='px-4 py-2 bg-white rounded-[5px] absolute bottom-8 left-4'>New arrival</div>
            </div>
            <div className='w-1/2 h-[550px] overflow-hidden relative'>
                <img className='object-cover' src="https://cf.shopee.vn/file/vn-11134207-7r98o-lmvz4dez7bvj87" alt=""/>
                <div className='px-4 py-2 bg-white rounded-[5px] absolute bottom-8 right-4'>Beanie</div>
            </div>
        </div>
    );
};

export default Arrival;