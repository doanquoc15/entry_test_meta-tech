import React from 'react';
import {FaAngleRight} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="text-[14px] flex items-center w-full h-[40px] bg-gradient-to-l from-blue-500 to-pink-400">
      <p className="w-[99%] text-center">Sign up now and get <b>P50</b> coupon</p>
      <p className="flex justify-end"><FaAngleRight size={24} color="white"/></p>
    </div>
  );
};

export default TopBar;