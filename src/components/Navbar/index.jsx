import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { menuData } from '../../data';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="h-14 relative -mb-5">
      <div className="container flex justify-between items-center">
        <div>
          <div className="flex space-x-12">
            {menuData?.map((item, index) => (
              <NavLink
                to={item.url}
                className={`text-[14px] pb-2 uppercase font-bold text-gray-800 hover:text-gray-600 transition duration-300 ${
                  activeIndex === index ? 'border-b-[4px] border-red-300' : ''
                } ${index === menuData.length - 1 ? 'text-red-600' : ''}`}
                onClick={() => handleClick(index)}
                key={index}
              >
                {item?.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
