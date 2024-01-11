import React from "react";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className="flex justify-between  px-[30px] mb-[27px] items-center">
        <div className="italic flex gap-2">
          <span className="text-[20px] font-[Lora]">join the community</span>
          <span className="bg-red-200 py-2 px-6 rounded-[7px] text-[15px]">
            Become out KOLs
          </span>
        </div>
        <div className="flex gap-2">
          <span className="bg-red-200 p-1 rounded-[5px]">
            <FaInstagram size={24} />
          </span>
          <span className="bg-red-200 p-1 rounded-[5px]">
            <FaTiktok size={24} />
          </span>
        </div>
      </div>
      <div className="w-full flex">
        <img className="w-1/4 object-cover h-[430px]" src="https://www.elle.vn/wp-content/uploads/2023/01/05/511241/stella-mccartney-ss23-1024x1536.webp" alt="" />
        <img className="w-1/4 object-cover h-[430px]" src="https://style-republik.com/wp-content/uploads/2022/08/00002-bottega-veneta-fall-2022-r.jpg" alt="" />
        <img className="w-1/4 object-cover h-[430px]" src="https://www.elle.vn/wp-content/uploads/2023/01/05/511241/kate-moss-bottega-veneta-2023.webp" alt="" />
        <img className="w-1/4 object-cover h-[430px]" src="https://www.elle.vn/wp-content/uploads/2023/01/05/511241/bst-knwls-23-1024x1536.webp" alt="" />
      </div>
      <div className="w-full bg-red-200 h-[300px] flex flex-col justify-center items-center gap-4">
        <p className="font-[Lora] text-[40px]">Confidence from within</p>
        <p className="text-[16px]">Post you picture on your instagram or facebook with hashtag #flexfy</p>
        <button className="bg-white py-2 px-5 rounded-[7px] text-[16px] mt-1">about us</button>
      </div>
    </div>
  );
};

export default About;
