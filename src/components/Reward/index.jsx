import React from "react";

const Reward = () => {
  return (
    <div className="w-full h-[450px] flex">
      <div className="w-1/2 h-full bg-orange-300 flex justify-center items-center flex-col gap-4">
        <p className="font-bold text-[35px] tracking-[2px]">Promotion Member</p>
        <p>Sign up now and get <span className="font-[500]">₱50</span> coupon</p>
        <button className="px-5 py-2 rounded-[5px] mt-1 bg-white">join rewards</button>
      </div>
      <div className="w-1/2 h-full overflow-hidden">
        <img className="object-cover" src="https://sohanews.sohacdn.com/160588918557773824/2022/4/26/img9426-1513135649887-1650962735992867405877.jpg" alt="" />
      </div>
    </div>
  );
};

export default Reward;
