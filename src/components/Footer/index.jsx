import React from "react";
import { communityData, learnData, resourceData, shopData } from "../../data";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import logoF from "../../images/logo-f.png";
const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="text-[15px] px-7 flex gap-[100px] justify-between w-full pt-4">
        <div className="w-2/3 flex justify-between mt-[100px]">
          <div className="flex flex-col gap-2">
            <p className="font-[500] text-[14px]">SHOP</p>
            {shopData?.map((item, index) => (
              <p key={index} className="tracking-[1px]">
                {item.title}
              </p>
            ))}
            <div className="gap-2 flex mt-[70px] mb-6">
              <FaInstagram size={19} />
              <FaFacebookF size={19} />
              <FaTiktok size={19} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-[500] text-[14px]">COMMUNITY</p>
            {communityData?.map((item, index) => (
              <p key={index} className="tracking-[1px]">
                {item.title}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-[500] text-[14px]">LEARN</p>
            {learnData?.map((item, index) => (
              <p key={index} className="tracking-[1px]">
                {item.title}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-[500] text-[14px]">RESOURCES</p>
            {resourceData?.map((item, index) => (
              <p key={index} className="tracking-[1px]">
                {item.title}
              </p>
            ))}
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-2">
          <div>
            <img className="w-[200px] object-cover" src={logoF} alt="" />
          </div>
          <p>Sign up for P50 OFF your first order!</p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="email address"
              className="border-[1px] border-black rounded-[10px] w-[300px] h-[45px] px-3"
            />
            <button className="h-[45px] bg-red-200 px-6 rounded-[10px]">
              join
            </button>
          </div>
          <p>
            By signing up,you agree to receive marketing emails from LIVELY. You
            can unsubscribe any time by clicking the link at the bottom of our
            emails.
          </p>
          <p className="opacity-[0.5]">Privacy & Terms</p>
        </div>
      </div>
      <div className="bg-red-200 py-[6px] text-[14px] text-center">
        @ Copyright 2023 FLEXFY/Team/Privacy
      </div>
      <p className="text-center py-[6px] text-[14px]">Designer ny AVL Team</p>
      <div className="h-[40px] bg-yellow-50 text-center">
        <select>
          <option value="0">Peso (PHP ₱)</option>
          <option value="1">Usa (Dollar $)</option>
        </select>
      </div>
    </div>
  );
};

export default Footer;
