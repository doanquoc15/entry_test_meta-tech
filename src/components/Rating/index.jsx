import React from 'react';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
const Rating = ({numberStar}) => {
    const totalStars = 5;
    const filledStars = Array(numberStar).fill(<FaStar color="pink" />);
    const empStars = Array(totalStars-numberStar).fill(<CiStar color="pink" />);
    return (
        <div className='flex gap-1'>
            {filledStars}
            {empStars}
        </div>
    );
};

export default Rating;