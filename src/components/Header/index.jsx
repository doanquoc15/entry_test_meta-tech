import React from 'react';
import Logo from "../../images/logo.png";
import { FaSearch } from 'react-icons/fa';
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Navbar from '../Navbar';
const Header = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex justify-between items-center mx-4'>
                <div className='flex gap-5'>
                  {/*eslint-disable-next-line */}
                    <a href="#">rewards</a>
                  {/*eslint-disable-next-line */}
                    <a href="#">fit guide</a>
                </div>
                <div className='w-[150px]'><img className='object-contain' src={Logo} alt=""/></div>
               <div className='flex gap-4 items-center'>
                 <div className='flex items-center bg-[#f2f2f2] h-[40px] rounded-[5px] px-2 py-1'>
                    <input
                      className='bg-[#f2f2f2]'
                      type="text"
                      placeholder="search..."
                    />
                    <FaSearch size={22} style={{ cursor: 'pointer'}} />
                </div>
                <IoPersonOutline size={28} />
                <div className='relative'>
                  <HiOutlineShoppingBag size={28} />
                  <div className='w-4 h-4 flex justify-center items-center text-[12px] rounded-[50%] bg-red-200 absolute -right-1 -bottom-1' >0</div>
                </div>
               </div>
            </div>
            <div className='flex gap-6 justify-center'>
              <p className='bg-gradient-to-r from-orange-400 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text uppercase'>Summer vibe collection <span className='text-[12px]'>2023</span></p>
              <Navbar />         
            </div>
        </div>
    );
};

export default Header;