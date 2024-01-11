import React from "react";
import { NavLink } from "react-router-dom";
import Rating from "../Rating";
const Card = ({data}) => {
  const { img, stars, reviews, productName, color, status, price, colorProduct, typeMoney} = data;
  const getBackground = {
    "new arrival": "bg-gradient-to-l from-blue-500 to-red-200",
    "crew fave": "bg-red-200",
  }

  const getTypeMoney = {
    usa : "$",
    philippines: "₱"
  }

  return (
    <div className="w-full h-full text-[15px]">
      <div className="flex h-full flex-col">
        <div className="relative">
          <img src={img} className="h-[320px] w-full object-cover" alt="" />
          <div className={`absolute bottom-0 left-[50%] -translate-x-[50%] h-[30px] w-full uppercase text-[11px] text-white flex justify-center items-center ${getBackground[status]}`}>{status}</div>
        </div>
        <div className="flex gap-2 flex-col pl-4 h-full justify-between">
          <div>
            <div className="flex gap-2 items-center mt-2">
              <Rating numberStar = {stars}/>
              <span className="text-gray-300 uppercase text-[10px]">{reviews} reviews</span>
            </div>
          </div>
            <p className="text-[14px]">{productName}</p>
            <p>{getTypeMoney[typeMoney]} {price}</p>
          <div className="flex gap-1 items-end mb-1">
            {color && color.map((item, index) => (
              <div className={`rounded-[50%] border-[1px] ${item === colorProduct && "border-black" }`}>
                <p className={`w-3 h-3 rounded-[50%] outline-offset-4 bg-red-400`} style={{background: item}}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
