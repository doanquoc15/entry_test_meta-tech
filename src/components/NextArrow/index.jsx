import React from 'react';
import { FaAngleRight } from "react-icons/fa";
const NextArrow = ({onClick, disabled}) => {
    console.log(disabled)
    return (
        <div className='absolute right-5 -top-[40px]' onClick={onClick}>
            <div><FaAngleRight opacity={disabled ? 0.3 : 1} size={25}/></div>
        </div>
    );
};

export default NextArrow;