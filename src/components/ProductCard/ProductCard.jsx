import React from "react";
import suit from "../../Assets/Rectangle 3.png";
import { IoMdMore } from "react-icons/io";

const ProductCard = () => {
  return (
    <div className="border w-full relative flex flex-col justify-center ">
      <div className="absolute right-5 top-5 cursor-pointer ">
        <IoMdMore size={24} />
      </div>
      <img src={suit} className="h-[500px] object-contain " alt="Product" />
      <p className="text-center">Men Suit</p>
      <p className="text-center">₦100,000</p>
    </div>
  );
};

export default ProductCard;
