import React from "react";
import Rating from "../Rating";
import { NavLink } from "react-router-dom";

const ShopStyle = ({ data }) => {
  const { description, img, stars,style  } = data;
  return (
    <div className="w-full h-full text-[15px]">
      <div className="flex h-full flex-col text-center">
        <img src={img} className="h-[320px] w-full object-cover" alt="" />
        <div className="flex gap-3 flex-col pl-4 h-full justify-between">
          <div className="flex justify-center mt-4">
            <Rating numberStar={stars} />
          </div>
          <p className="text-[14px] text-center px-2 leading-8">"{description}"</p>
          <p className="text-[12px] opacity-[0.7] text-center px-2 leading-8">{style}</p>
        </div>
      </div>
      <div className="flex justify-center mb-1">
        <NavLink to="#" className="mt-9 font-semibold uppercase border-b-[1px] border-[#000] w-fit text-[13px]">Shop style</NavLink>
      </div>
    </div>
  );
};

export default ShopStyle;
