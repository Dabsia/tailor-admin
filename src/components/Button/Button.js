import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="text-white bg-[#094BA1] p-3 rounded-md w-[200px] mx-auto  "
    >
      {text}
    </button>
  );
};

export default Button;
