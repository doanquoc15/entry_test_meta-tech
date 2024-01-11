import React from 'react';

const Category = ({data}) => {
    const {img, category} = data;
    return (
      <div className="w-full h-full text-[15px]">
      <div className="flex h-full flex-col">
        <div className="relative">
          <img src={img} className="h-[320px] w-full object-cover" alt="" />
          <div className={`absolute bottom-3 left-4 py-2 px-4 bg-white rounded-[5px] text-[11]px`}>{category}</div>
        </div>
      </div>
    </div>
    );
};

export default Category;